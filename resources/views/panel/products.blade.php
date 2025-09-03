<!-- Panel de lista de productos -->
<div class="container mx-auto p-4 sm:p-6 lg:p-8">
    <!-- Cabecera -->
    <header class="mb-8 border-b border-gray-200">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 text-center md:text-left">Gestión de Inventario</h1>
        <p class="text-gray-600 my-2 text-center md:text-left">Administra los vehículos de tu automotora.</p>
    </header>

    <!-- Botón para agregar nuevo vehículo -->
    <div class="flex justify-end mb-6">
        <button id="add-product-btn" class="btn-custom font-semibold py-2 px-4 rounded-lg shadow-md">
            + Agregar Vehículo
        </button>
    </div>

    <!-- Contenedor de la lista de vehículos -->
    <div id="product-list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <!-- Las tarjetas de los vehículos se insertarán aquí dinámicamente -->
    </div>

    <!-- Contenedor de la Paginación -->
    <div id="pagination-controls" class="mt-8 pb-5 flex justify-center items-center space-x-2">
        <!-- Los botones de paginación se insertarán aquí -->
    </div>
</div>
<!-- Modal para agregar/editar vehículo -->
<div id="product-modal" class="fixed inset-0 flex items-center justify-center hidden bg-black/30 backdrop-blur-[2px] z-50">
    <div id="modal-content" class="card-custom rounded-lg w-11/12 max-w-lg p-6 relative shadow-2xl">
        <!-- Botón de cierre -->
        <button id="close-product-modal" class="absolute top-2 right-2 text-white text-lg mr-4 hover:text-gray-400">✕</button>

        <!-- Título del modal -->
        <h2 id="modal-title" class="text-2xl font-bold mb-6 text-center text-white">Agregar Nuevo Vehículo</h2>

        <!-- Formulario principal -->
        <form id="product-form" class="space-y-4 flex flex-col h-full">
            <input type="hidden" id="product-id">

            <!-- Campos de Marca y Modelo en 2 columnas -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label for="brand" class="form-label form-label-custom">Marca</label>
                    <input type="text" id="brand" name="brand" required
                        class="form-control form-control-custom w-full px-4 py-1" placeholder="Ej: Toyota">
                    <div class="text-red-500 text-sm mt-1" id="errorBrand"></div>
                </div>
                <div>
                    <label for="model" class="form-label form-label-custom">Modelo</label>
                    <input type="text" id="model" name="model" required
                        class="form-control form-control-custom w-full px-4 py-1" placeholder="Ej: Corolla">
                    <div class="text-red-500 text-sm mt-1" id="errorModel"></div>
                </div>
            </div>

            <!-- Campos de Año y Precio en 2 columnas -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label for="year" class="form-label form-label-custom">Año</label>
                    <input type="number" id="year" name="year" required
                        class="form-control form-control-custom w-full px-4 py-1" placeholder="Ej: 2023">
                    <div class="text-red-500 text-sm mt-1" id="errorYear"></div>
                </div>
                <div>
                    <label for="price" class="form-label form-label-custom">Precio (CLP)</label>
                    <input type="number" id="price" name="price" required
                        class="form-control form-control-custom w-full px-4 py-1" placeholder="Ej: 15000000">
                    <div class="text-red-500 text-sm mt-1" id="errorPrice"></div>
                </div>
            </div>

            <!-- Campo de descripción -->
            <div>
                <label for="description" class="form-label form-label-custom">Descripción</label>
                <textarea id="description" name="description" class="form-control form-control-custom w-full px-4 py-1" placeholder="Opcional"></textarea>
                <div class="text-red-500 text-sm mt-1" id="errorDescription"></div>
            </div>


            <!-- Campo de imagen -->
            <!-- <div>
                <label for="image-input" class="form-label form-label-custom">Seleccionar Imagen</label>
                <input type="file" id="image-input" name="image" accept="image/*"
                    class="form-control form-control-custom w-full">
                <div class="text-red-500 text-sm mt-1" id="errorImage"></div>
            </div> -->
            <!-- Nuevo campo de imagen con diseño mejorado -->
            <div>
                <label class="form-label form-label-custom mb-2">Seleccionar Imagen</label>
                <div id="image-upload-area" class="upload-area">
                    <input type="file" id="image-input" name="image" accept="image/*" class="hidden">
                    <x-heroicon-o-arrow-up-tray class="w-4 h-4 text-gray-200" />
                    <p id="upload-text" class="upload-area-text text-sm mt-2 text-center">Haz clic para subir una imagen o arrástrala aquí.</p>
                </div>
                <div class="text-red-500 text-sm mt-1" id="errorImage"></div>
            </div>

            <!-- Contenedor y controles para Croppie.js -->
            <div id="image-editor-container" class="space-y-4 hidden">
                <h3 id="croppie-title" class="text-lg font-bold text-white text-center">Previsualización y Recorte</h3>
                <div class="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <!-- Botones de Proporción (Vertical) -->
                    <div class="flex flex-row sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2">
                        <button type="button" data-ratio="1:1"
                            class="ratio-btn bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300">1:1</button>
                        <button type="button" data-ratio="4:3"
                            class="ratio-btn bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300">4:3</button>
                        <button type="button" data-ratio="16:9"
                            class="ratio-btn bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300">16:9</button>
                    </div>
                    <!-- Contenedor de Croppie.js -->
                    <div id="croppie-container" class="flex-grow"></div>
                    <!-- Botón de Rotación (Solo uno) -->
                    <button type="button" id="rotate-right-btn"
                        class="bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300">Rotar</button>
                </div>
            </div>

            <!-- Botones de acción -->
            <div class="flex justify-end space-x-4 mt-4 pt-4">
                <button type="button" id="cancel-btn"
                    class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300  w-30">Cancelar</button>
                <button type="submit" class="btn-custom text-white font-semibold py-2 px-4 rounded-lg w-30">Guardar</button>
            </div>
        </form>
    </div>
</div>


<!-- Modal de Confirmación para Eliminar -->
<div id="delete-confirm-modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 hidden">
    <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm modal-enter">
        <h3 class="text-lg font-medium text-gray-900">Confirmar Eliminación</h3>
        <p class="mt-2 text-sm text-gray-600">¿Estás seguro de que quieres eliminar este vehículo? Esta acción no se puede deshacer.</p>
        <div class="mt-6 flex justify-end space-x-3">
            <button id="cancel-delete-btn" class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">Cancelar</button>
            <button id="confirm-delete-btn" class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">Eliminar</button>
        </div>
    </div>
</div>