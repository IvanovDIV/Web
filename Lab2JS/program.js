document.addEventListener('DOMContentLoaded', function () {
    const realPartInput = document.getElementById('real-part');
    const imaginaryPartInput = document.getElementById('imaginary-part');
    const magnitudeInput = document.getElementById('magnitude');
    const angleInput = document.getElementById('angle');
    const errorMessage = document.getElementById('error-message');
    const algebraicForm = document.getElementById('algebraic-form');
    const trigonometricForm = document.getElementById('trigonometric-form');
    const showFormButton = document.getElementById('show-form');
    const calculateButton = document.getElementById('calculate');
    const clearButton = document.getElementById('clear');
    const resultDisplay = document.getElementById('result');

    const showError = (input) => {
        input.classList.add('error');
        errorMessage.style.display = 'block'; 
    };

    const clearError = (input) => {
        input.classList.remove('error');
        errorMessage.style.display = 'none'; 
    };

    function validateInput() {
        const input = this;
        if (isNaN(input.value)) {
            showError(input);
        } else {
            clearError(input);
        }
    }

    realPartInput.addEventListener('input', validateInput);
    imaginaryPartInput.addEventListener('input', validateInput);
    magnitudeInput.addEventListener('input', validateInput);
    angleInput.addEventListener('input', validateInput);

    validateInput.call(realPartInput);
    validateInput.call(imaginaryPartInput);
    validateInput.call(magnitudeInput);
    validateInput.call(angleInput);

    showFormButton.addEventListener('click', function () {
        if (algebraicForm.style.display === 'none') {
            algebraicForm.style.display = 'block';
            trigonometricForm.style.display = 'none';
            clearError(magnitudeInput); 
            clearError(angleInput);
        } else {
            algebraicForm.style.display = 'none';
            trigonometricForm.style.display = 'block';
            clearError(realPartInput); 
            clearError(imaginaryPartInput);
        }
    });

    document.querySelectorAll('input[name="number-form"]').forEach(function (radio) {
        radio.addEventListener('change', function () {
            if (radio.value === 'algebraic') {
                algebraicForm.style.display = 'block';
                trigonometricForm.style.display = 'none';
                clearError(magnitudeInput);
                clearError(angleInput);
            } else {
                algebraicForm.style.display = 'none';
                trigonometricForm.style.display = 'block';
                clearError(realPartInput); 
                clearError(imaginaryPartInput);
            }
        });
    });

    calculateButton.addEventListener('click', function () {
        const selectedOperations = Array.from(document.getElementById('operation-select').selectedOptions).map(option => option.value);
        let realPart, imaginaryPart;

        if (algebraicForm.style.display === 'block') {
            realPart = parseFloat(realPartInput.value);
            imaginaryPart = parseFloat(imaginaryPartInput.value);
        } else {
            const magnitude = parseFloat(magnitudeInput.value);
            const angle = parseFloat(angleInput.value);
            realPart = magnitude * Math.cos(angle);
            imaginaryPart = magnitude * Math.sin(angle);

            if (isNaN(magnitude) || isNaN(angle)) {
                errorMessage.textContent = 'Введите правильное значение угла и модуля (для тригонометрической формы).';
                showError(magnitudeInput);
                showError(angleInput);
                return;
            }
        }

        if (isNaN(realPart) || isNaN(imaginaryPart)) {
            errorMessage.textContent = 'Введите корректные значения для действительной и мнимой частей.';
            showError(realPartInput);
            showError(imaginaryPartInput);
            return;
        }

        let result = '';
        if (selectedOperations.includes('real')) {
            result += `Действительная часть: ${realPart}, `;
        }
        if (selectedOperations.includes('argument')) {
            const argumentRadians = Math.atan2(imaginaryPart, realPart);
            const argumentDegrees = argumentRadians * (180 / Math.PI);
            result += `Аргумент: ${argumentDegrees.toFixed(2)} градусов, `;
        }
        if (selectedOperations.includes('imaginary')) {
            result += `Мнимая часть: ${imaginaryPart}, `;
        }
        resultDisplay.textContent = result;

        clearError(realPartInput);
        clearError(imaginaryPartInput);
        clearError(magnitudeInput);
        clearError(angleInput);
    });

    clearButton.addEventListener('click', function () {
        resultDisplay.textContent = '';
        realPartInput.value = '';
        imaginaryPartInput.value = '';
        magnitudeInput.value = '';
        angleInput.value = '';
        clearError(realPartInput);
        clearError(imaginaryPartInput);
        clearError(magnitudeInput);
        clearError(angleInput);
        errorMessage.textContent = '';
    });
});
