document.addEventListener('DOMContentLoaded', function () {
    const algebraicForm = document.getElementById('algebraic-form');
    const trigonometricForm = document.getElementById('trigonometric-form');
    const showFormButton = document.getElementById('show-form');
    const calculateButton = document.getElementById('calculate');
    const clearButton = document.getElementById('clear');
    const resultDisplay = document.getElementById('result');
  
    showFormButton.addEventListener('click', function () {
      if (algebraicForm.style.display === 'none') {
        algebraicForm.style.display = 'block';
        trigonometricForm.style.display = 'none';
      } else {
        algebraicForm.style.display = 'none';
        trigonometricForm.style.display = 'block';
      }
    });
  
    calculateButton.addEventListener('click', function () {
      const operationSelect = document.getElementById('operation-select');
      const selectedOperations = Array.from(operationSelect.selectedOptions).map(option => option.value);
  
      let realPart, imaginaryPart, magnitude, angle;
  
      const realPartInput = document.getElementById('real-part');
      const imaginaryPartInput = document.getElementById('imaginary-part');
      const magnitudeInput = document.getElementById('magnitude');
      const angleInput = document.getElementById('angle');
  
      const errorMessage = document.getElementById('error-message');
      errorMessage.textContent = ''; // Очищаем сообщение об ошибке перед проверкой
  
      if (algebraicForm.style.display === 'block') {
        realPart = parseFloat(realPartInput.value);
        imaginaryPart = parseFloat(imaginaryPartInput.value);
        if (isNaN(realPart) || isNaN(imaginaryPart)) {
          errorMessage.textContent = 'Введите верное значение действительной и мнимой частей.';
          realPartInput.classList.add('error');
          imaginaryPartInput.classList.add('error');
          return; // Прекращаем выполнение функции, если данные введены неверно
        }
      } else {
        magnitude = parseFloat(magnitudeInput.value);
        angle = parseFloat(angleInput.value);
        if (isNaN(magnitude) || isNaN(angle)) {
          errorMessage.textContent = 'Введите правильное значение угла и модуля(для тригонометрической формы).';
          magnitudeInput.classList.add('Ошибка');
          angleInput.classList.add('Ошибка');
          return; // Прекращаем выполнение функции, если данные введены неверно
        }
      }
  
      // Если мы достигли этой точки, значит данные введены правильно и мы можем продолжить вычисления
  
      let result = '';
  
      if (selectedOperations.includes('real')) {
        result += `Действительная часть: ${realPart}, `;
      }
  
      if (selectedOperations.includes('argument')) {
        const argumentRadians = algebraicForm.style.display === 'block' ? Math.atan2(imaginaryPart, realPart) : angle;
        const argumentDegrees = argumentRadians * (180 / Math.PI);
        result += `Аргумент: ${argumentDegrees.toFixed(2)} градусов(а), `;
      }
  
      if (selectedOperations.includes('imaginary')) {
        result += `Мнимая часть: ${imaginaryPart}, `;
      }
  
      resultDisplay.textContent = result;
  
      // Очищаем стили ошибок после успешных вычислений
      realPartInput.classList.remove('error');
      imaginaryPartInput.classList.remove('error');
      magnitudeInput.classList.remove('error');
      angleInput.classList.remove('error');
      errorMessage.textContent = ''; // Очищаем сообщение об ошибке
    });
  
    clearButton.addEventListener('click', function () {
      resultDisplay.textContent = '';
      document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
  
      // Очищаем стили ошибок и сообщение об ошибке при очистке полей
      document.querySelectorAll('.error').forEach(errorElement => errorElement.classList.remove('error'));
      document.getElementById('error-message').textContent = '';
    });
  });
  