import axios from "axios";

function setupPasswordForm(isModal, getUser) {
    const manualResetPassForm = document.getElementById('manualResetPassForm');
    const newPassInput = document.getElementById('newPassInput');
    const confirmPassInput = document.getElementById('confirmPassInput');
    const errorNewPass = document.getElementById('errorNewPass');
    const errorConfirmPass = document.getElementById('errorConfirmPass');
    const newPassToggle = document.getElementById('newPassToggle');
    const confirmPassToggle = document.getElementById('confirmPassToggle');
    const lengthConditionLi = document.getElementById('passLengthCondition');
    const matchConditionLi = document.getElementById('passMatchCondition');
    let manualResetPassModal = null;

    const validTextColor = 'text-green-400';
    const validBgColor = 'bg-green-400';
    const normalTextColor = 'text-slate-500';
    const normalBgColor = 'bg-slate-500';

    function validatePasswords() {
        const newPassword = newPassInput.value;
        const confirmPassword = confirmPassInput.value;

        // Establecer condiciones
        const isLengthValid = newPassword.length >= 8;
        const passwordsMatch = confirmPassword.length > 0 && newPassword === confirmPassword;

        // Función para actualizar el estado visual de una condición
        function updateCondition(element, isValid) {
            const circle = element.querySelector('span');
            if (isValid) {
                element.classList.remove(normalTextColor);
                element.classList.add(validTextColor);
                circle.classList.remove(normalBgColor);
                circle.classList.add(validBgColor);
            } else {
                element.classList.remove(validTextColor);
                element.classList.add(normalTextColor);
                circle.classList.remove(validBgColor);
                circle.classList.add(normalBgColor);
            }
        }
        
        updateCondition(lengthConditionLi, isLengthValid);
        updateCondition(matchConditionLi, passwordsMatch);
    }

    newPassInput.addEventListener('input', () => {
        errorNewPass.textContent = '';
        validatePasswords();
    });

    confirmPassInput.addEventListener('input', () => {
        errorConfirmPass.textContent = '';
        validatePasswords();
    });

    function setupPassToggle(input, btn) {
        const eyeSlash = btn.querySelector('.eye-slash');
        const eyeNormal = btn.querySelector('.eye-normal');
        btn.addEventListener('click', () => {
            if (input.type === 'password') {
                input.type = 'text';
                eyeNormal.classList.remove('hidden');
                eyeSlash.classList.add('hidden');
            } else {
                input.type = 'password';
                eyeSlash.classList.remove('hidden');
                eyeNormal.classList.add('hidden');
            }
        });
    }

    setupPassToggle(newPassInput, newPassToggle);
    setupPassToggle(confirmPassInput, confirmPassToggle);

    if (isModal) {
        const resetPassModal = document.getElementById('resetPassModal');
        const manualResetPassBtn = document.getElementById('manualResetPassBtn');
        const backManualResetBtn = document.getElementById('backManualResetBtn');
        manualResetPassModal = document.getElementById('manualResetPassModal');

        // Función para resetear los inputs / iconos
        function resetInput(input, toggleBtn) {
            input.value = '';
            input.type = 'password';

            const eyeSlash = toggleBtn.querySelector('.eye-slash');
            const eyeNormal = toggleBtn.querySelector('.eye-normal');
            if (eyeSlash && eyeSlash.classList.contains('hidden')) eyeSlash.classList.remove('hidden');
            if (eyeNormal && !eyeNormal.classList.contains('hidden')) eyeNormal.classList.add('hidden');
        }

        // Click del botón de manual
        manualResetPassBtn.addEventListener('click', () => {
            errorNewPass.textContent = '';
            errorConfirmPass.textContent = '';
            resetInput(newPassInput, newPassToggle);
            resetInput(confirmPassInput, confirmPassToggle);
            validatePasswords();
            window.closeModal(resetPassModal);
            window.openModal(manualResetPassModal.id);
        });

        // Cerrar al hacer clic en el botón de volver
        backManualResetBtn.addEventListener('click', () => {
            window.closeModal(manualResetPassModal);
            window.openModal(resetPassModal.id);
        });
    }

    manualResetPassForm.addEventListener('submit', async (e) => {
        console.log("Attempting submit");
        if (isModal) e.preventDefault(); // Cancelar submit de inmediato si es modal

        // Establecer valores
        let allGood = true;
        const formNewPass = newPassInput.value.trim();
        const formConfirmPass = confirmPassInput.value.trim();

        // Limpiar errores anteriores
        errorNewPass.textContent = '';
        errorConfirmPass.textContent = '';

        // Verificar que los valores no estén vacíos y sean válidos
        const isLengthValid = formNewPass && formNewPass.length >= 8;
        const passwordsMatch = formConfirmPass && formNewPass === formConfirmPass;
        if (!isLengthValid || !passwordsMatch) {
            if (!isLengthValid) errorNewPass.textContent = "La contraseña debe tener al menos 8 caracteres";
            if (!passwordsMatch) errorConfirmPass.textContent = "Las contraseñas deben coincidir";
            allGood = false;
            if (isModal) return;
        }

        if (!isModal) {
            // Es formulario de mail
            if (!allGood) e.preventDefault(); // Cancela el submit si hay errores
        }
        else
        {
            // Es formulario del modal
            if (allGood) {
                // Todos los datos recibidos son válidos, se puede enviar al backend
                try {
                    const user = getUser?.();
                    if (!user) {
                        console.error("No user selected");
                        return;
                    }

                    const response = await axios.post("/panel/edit_user_password_manual", {
                        id: user.id,
                        password: formNewPass,
                    });

                    const data = response.data;
                    if (data.success == true)
                    {
                        // Cerrar modal y limpiar form
                        showMessage("Contraseña actualizada correctamente.", "success");
                        window.closeModal(manualResetPassModal);
                    }
                    else
                    {
                        errorNewPass.textContent = data.message;
                    }
                } catch (error) {
                    console.error("Error al actualizar contraseña: ", error);
                }
            }
        }
    });
}

window.setupPasswordForm = setupPasswordForm;