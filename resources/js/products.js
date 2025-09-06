import axios from "axios";
import Croppie from "croppie";

// Inicializar Axios
axios.defaults.headers.common["X-CSRF-TOKEN"] = document.querySelector(
    'meta[name="csrf-token"]'
).content;
axios.defaults.headers.common["Content-Type"] = "application/json";

let productList,
    addProductBtn,
    productModal,
    closeProductModal,
    cancelBtn,
    productForm,
    modalTitle,
    productIdInput,
    deleteConfirmModal,
    cancelDeleteBtn,
    confirmDeleteBtn,
    paginationControls,
    menuButton;
//Croppie
let imageUploadArea,
    uploadText,
    imageInput,
    imageEditorContainer,
    croppieContainer,
    rotateRightBtn,
    ratioButtons,
    viewportWidth,
    viewportHeight,
    currentRatio;

let croppieInstance = null;
let currentImageBase64 = null;

let products = []; // Array de usuarios cargados

/* window.addEventListener("load", function () {
    initProductSection();
}); */

window.initProductSection = () => {
    productList = document.getElementById("product-list");
    addProductBtn = document.getElementById("add-product-btn");
    productModal = document.getElementById("product-modal");
    cancelBtn = document.getElementById("cancel-btn");
    productForm = document.getElementById("product-form");
    modalTitle = document.getElementById("modal-title");
    productIdInput = document.getElementById("product-id");
    deleteConfirmModal = document.getElementById("delete-confirm-modal");
    cancelDeleteBtn = document.getElementById("cancel-delete-btn");
    confirmDeleteBtn = document.getElementById("confirm-delete-btn");
    paginationControls = document.getElementById("pagination-controls");
    menuButton = document.getElementById("menu-button");
    closeProductModal = document.getElementById("close-product-modal");

    menuButton.classList.remove("hidden");

    //croppie
    imageUploadArea = document.getElementById("image-upload-area");
    uploadText = document.getElementById("upload-text");
    imageInput = document.getElementById("image-input");
    imageEditorContainer = document.getElementById("image-editor-container");

    croppieContainer = document.getElementById("croppie-container");
    rotateRightBtn = document.getElementById("rotate-right-btn");
    ratioButtons = document.querySelectorAll(".ratio-btn");

    fetchProducts();

    // --- MANEJO DE EVENTOS ---
    addProductBtn.addEventListener("click", () =>
        showModal("Agregar Nuevo Vehículo")
    );
    cancelBtn.addEventListener("click", hideModal);
    closeProductModal.addEventListener("click", hideModal);

    cancelDeleteBtn.addEventListener("click", hideDeleteConfirmModal);
    productModal.addEventListener(
        "click",
        (e) => e.target === productModal && hideModal()
    );
    deleteConfirmModal.addEventListener(
        "click",
        (e) => e.target === deleteConfirmModal && hideDeleteConfirmModal()
    );

    productForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Bloqueamos el botón y mostramos loader
        const submitBtn = productForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        const originalBtnHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="loader"></span>';

        // Crear objeto de datos
        const data = {
            brand: document.getElementById("brand").value,
            model: document.getElementById("model").value,
            year: document.getElementById("year").value,
            price: document.getElementById("price").value,
            description: document.getElementById("description").value,
        };

        const productId = productIdInput.value;
        if (productId) data.product_id = productId;

        // Función para añadir datos de Croppie
        const addCroppieData = async () => {
            if (!croppieInstance) return;
            try {
                const croppedImageBase64 = await croppieInstance.result({
                    type: "base64",
                    format: "webp",
                    size: "viewport",
                });
                data.image = croppedImageBase64;

                const cropData = croppieInstance.get();
                data.croppie_points = JSON.stringify(cropData.points || []);
                data.croppie_zoom = cropData.zoom;
                data.croppie_orientation = cropData.orientation;
                data.croppie_viewport = JSON.stringify({
                    width: viewportWidth,
                    height: viewportHeight,
                    ratio: currentRatio,
                });
            } catch (err) {
                console.error("Error al obtener la imagen recortada:", err);
            }
        };

        // Función para enviar el formulario
        const sendForm = async () => {
            try {
                await axios.post("/panel/save_product", data);
                hideModal();
                await fetchProducts(!productId);
            } catch (err) {
                console.error("Error al guardar producto:", err);
            } finally {
                // Desbloqueamos el botón y restauramos texto
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHTML;
            }
        };

        // Si hay archivo original, leerlo primero
        const originalFile = imageInput.files[0];
        if (originalFile) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                data.original_image = e.target.result;
                await addCroppieData();
                await sendForm();
            };
            reader.readAsDataURL(originalFile);
        } else {
            await addCroppieData();
            await sendForm();
        }
    });

    confirmDeleteBtn.addEventListener("click", () => {
        if (productToDeleteId) {
            products = products.filter((v) => v.id != productToDeleteId);
            const totalPages = Math.ceil(products.length / itemsPerPage);
            if (currentPage > totalPages && totalPages > 0) {
                currentPage = totalPages;
            }
            renderProducts();
            hideDeleteConfirmModal();
        }
    });

    //Croppie
    imageInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            currentImageBase64 = e.target.result;
            initCroppie(currentImageBase64, "1:1");
        };
        reader.readAsDataURL(file);
    });

    // Lógica para los botones de rotación y proporción
    rotateRightBtn.addEventListener("click", () => {
        if (croppieInstance) {
            // Rotar 90 grados en sentido horario
            croppieInstance.rotate(90);
        }
    });

    ratioButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const ratio = e.target.dataset.ratio;
            if (currentImageBase64) {
                initCroppie(currentImageBase64, ratio);
            }
        });
    });

    // Simular clic en el input file cuando se hace clic en el área de carga
    imageUploadArea.addEventListener("click", () => {
        imageInput.click();
    });

    // Actualizar el texto del área de carga cuando se selecciona un archivo
    imageInput.addEventListener("change", () => {
        if (imageInput.files.length > 0) {
            uploadText.textContent = `Archivo seleccionado: ${imageInput.files[0].name}`;
        } else {
            uploadText.textContent =
                "Haz clic para subir una imagen o arrástrala aquí.";
        }
    });

    // Prevenir el comportamiento por defecto de arrastrar y soltar
    imageUploadArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.stopPropagation();
        imageUploadArea.classList.add("border-blue-500");
    });

    imageUploadArea.addEventListener("dragleave", (e) => {
        e.preventDefault();
        e.stopPropagation();
        imageUploadArea.classList.remove("border-blue-500");
    });

    // Manejar el archivo soltado
    /* imageUploadArea.addEventListener("drop", (e) => {
        e.preventDefault();
        e.stopPropagation();
        imageUploadArea.classList.remove("border-blue-500");

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            // Asignar el archivo al input file
            imageInput.files = files;
            uploadText.textContent = `Archivo seleccionado: ${files[0].name}`;
        }
    }); */
    // Manejar el archivo soltado
    imageUploadArea.addEventListener("drop", (e) => {
        e.preventDefault();
        e.stopPropagation();
        imageUploadArea.classList.remove("border-blue-500");

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            // Actualizar el texto del área de carga
            uploadText.textContent = `Archivo seleccionado: ${files[0].name}`;

            // Leer el archivo y pasarlo a Croppie
            const file = files[0];
            const reader = new FileReader();
            reader.onload = function (e) {
                currentImageBase64 = e.target.result;
                initCroppie(currentImageBase64, "1:1");
            };
            reader.readAsDataURL(file);
        }
    });
};

// Función para traer usuarios desde el backend
async function fetchProducts(goToLastPage = false) {
    renderSkeletons();
    try {
        const response = await axios.get("/panel/get_products");
        products = response.data;

        if (goToLastPage) {
            currentPage = Math.ceil(products.length / itemsPerPage);
        }

        renderProducts();
    } catch (error) {
        console.error("Error al cargar productos:", error);
    }
}

let productToDeleteId = null;
let currentPage = 1;
const itemsPerPage = 8;

// --- FUNCIONES AUXILIARES ---
const formatPrice = (price) =>
    new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
    }).format(price);

const getPlaceholderImage = (brand, model) =>
    `https://placehold.co/600x400/94a3b8/ffffff?text=${encodeURIComponent(
        brand
    )}+${encodeURIComponent(model)}`;

// --- FUNCIONES DE RENDERIZADO ---
const renderProducts = () => {
    productList.innerHTML = "";
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);

    if (paginatedProducts.length === 0 && products.length > 0) {
        productList.innerHTML = `<p class="col-span-full text-center text-gray-500">No hay vehículos en esta página.</p>`;
    } else if (products.length === 0) {
        productList.innerHTML = `<p class="col-span-full text-center text-gray-500">No hay vehículos en el inventario.</p>`;
    } else {
        paginatedProducts.forEach((product) => {
            const card = document.createElement("div");
            card.className =
                "bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 flex flex-col";
            const imageSrc = product.url_image
                ? `/storage/${product.url_image}`
                : getPlaceholderImage(product.brand, product.model);

            card.innerHTML = `
                            <img src="${imageSrc}" alt="${product.brand} ${
                product.model
            }" class="w-full h-48 object-cover" onerror="this.onerror=null;this.src='${getPlaceholderImage(
                product.brand,
                product.model
            )}';">
                            <div class="p-4 flex flex-col flex-grow">
                                <h3 class="text-lg font-bold">${
                                    product.brand
                                } ${product.model}</h3>
                                <p class="text-gray-600">${product.year}</p>
                                <p class="text-xl font-semibold text-blue-600 mt-2">${formatPrice(
                                    product.price
                                )}</p>
                                <div class="mt-4 flex justify-end space-x-2 mt-auto">
                                    <button class="edit-btn p-2 rounded-full hover:bg-gray-200 transition-colors" data-id="${
                                        product.id
                                    }" title="Editar">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                    </button>
                                    <button class="delete-btn p-2 rounded-full hover:bg-gray-200 transition-colors" data-id="${
                                        product.id
                                    }" title="Eliminar">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                    </button>
                                </div>
                            </div>
                        `;
            productList.appendChild(card);
        });
    }
    renderPagination();

    const editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const product = products.find((p) => p.id == id);
            if (product) {
                showModal("Editar Vehículo", product);
            }
        });
    });
};

const renderPagination = () => {
    paginationControls.innerHTML = "";
    const totalPages = Math.ceil(products.length / itemsPerPage);
    if (totalPages <= 1) return;

    // Botón Anterior
    const prevBtn = document.createElement("button");
    prevBtn.innerHTML = `&laquo;`;
    prevBtn.className = "pagination-btn";
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
        }
    });
    paginationControls.appendChild(prevBtn);

    // Botones de Página
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.textContent = i;
        pageBtn.className = "pagination-btn";
        if (i === currentPage) pageBtn.classList.add("active");
        pageBtn.addEventListener("click", () => {
            currentPage = i;
            renderProducts();
        });
        paginationControls.appendChild(pageBtn);
    }

    // Botón Siguiente
    const nextBtn = document.createElement("button");
    nextBtn.innerHTML = `&raquo;`;
    nextBtn.className = "pagination-btn";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderProducts();
        }
    });
    paginationControls.appendChild(nextBtn);
};

const showModal = (title, product = null) => {
    destroyCroppie();
    modalTitle.textContent = title;
    uploadText.textContent =
        "Haz clic para subir una imagen o arrástrala aquí.";
    productForm.reset();
    productIdInput.value = "";

    if (product) {
        productIdInput.value = product.id;
        document.getElementById("brand").value = product.brand;
        document.getElementById("model").value = product.model;
        document.getElementById("year").value = product.year;
        document.getElementById("price").value = product.price;
        document.getElementById("description").value =
            product.description || "";

        // --- Lógica de Croppie ---
        if (product.url_original_image) {
            imageEditorContainer.classList.remove("hidden");

            // Cargar la imagen del servidor y convertirla a base64
            fetch(`/storage/${product.url_original_image}`)
                .then((response) => response.blob())
                .then((blob) => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        currentImageBase64 = reader.result;

                        const viewportData = product.croppie_viewport
                            ? JSON.parse(product.croppie_viewport)
                            : { width: 250, height: 250, ratio: "1:1" };

                        const points = product.croppie_points
                            ? JSON.parse(product.croppie_points)
                            : null;
                        const zoom = product.croppie_zoom || 1;
                        const orientation = product.croppie_orientation || 0;

                        // Ahora inicializamos Croppie con el base64 y los datos guardados
                        initCroppie(
                            currentImageBase64,
                            viewportData.ratio,
                            points,
                            zoom,
                            orientation
                        );
                    };
                    reader.readAsDataURL(blob);
                })
                .catch((error) =>
                    console.error("Error al cargar la imagen:", error)
                );
        }
    }

    productModal.classList.remove("hidden");
};

const hideModal = () => productModal.classList.add("hidden");

const showDeleteConfirmModal = (id) => {
    productToDeleteId = id;
    deleteConfirmModal.classList.remove("hidden");
};

const hideDeleteConfirmModal = () => {
    productToDeleteId = null;
    deleteConfirmModal.classList.add("hidden");
};

const renderSkeletons = (count = itemsPerPage) => {
    productList.innerHTML = "";
    for (let i = 0; i < count; i++) {
        const skeletonCard = document.createElement("div");
        skeletonCard.className =
            "bg-white rounded-xl shadow-lg overflow-hidden animate-pulse flex flex-col";

        skeletonCard.innerHTML = `
            <div class="bg-gray-300 w-full h-48"></div>
            <div class="p-4 flex flex-col flex-grow space-y-2">
                <div class="h-6 bg-gray-300 rounded w-3/4"></div>
                <div class="h-4 bg-gray-300 rounded w-1/2"></div>
                <div class="h-6 bg-gray-300 rounded w-1/3 mt-auto"></div>
            </div>
        `;
        productList.appendChild(skeletonCard);
    }
};

//Croppie
function destroyCroppie() {
    if (croppieInstance) {
        croppieInstance.destroy();
        croppieInstance = null;
    }
    imageEditorContainer.classList.add("hidden");
    currentImageBase64 = null;
}

function initCroppie(
    url,
    ratio = "1:1",
    points = null,
    zoom = null,
    orientation = 0
) {
    // 1. Destruir la instancia existente si la hay
    if (croppieInstance) {
        croppieInstance.destroy();
    }

    // 2. Calcular las dimensiones del viewport basadas en el ratio
    currentRatio = ratio;
    if (ratio === "16:9") {
        viewportWidth = 280;
        viewportHeight = 157.5;
    } else if (ratio === "4:3") {
        viewportWidth = 250;
        viewportHeight = 187.5;
    } else {
        // Caso "1:1" o cualquier otro
        viewportWidth = 250;
        viewportHeight = 250;
    }

    imageEditorContainer.classList.remove("hidden");

    // 3. Crear la nueva instancia de Croppie con la configuración básica
    croppieInstance = new Croppie(croppieContainer, {
        viewport: {
            width: viewportWidth,
            height: viewportHeight,
            // Eliminamos 'type: "square"' para que acepte rectángulos
        },
        boundary: {
            width: "100%",
            height: "100%",
        },
        enableOrientation: true,
    });

    // 4. Usar .bind() para cargar la imagen y restaurar el estado completo
    croppieInstance.bind({
        url: url,
        points: points,
        zoom: zoom,
        orientation: orientation,
    });
}
