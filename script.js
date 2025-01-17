// Получаем кнопку по ID
const addsymb = document.getElementById('addsymb');
const addnumb = document.getElementById('addnumb');
const passwordInput = document.getElementById('password');
const generateButton = document.getElementById('generatePassword');
const copier = document.getElementById("cope");

let includeSymbols = false;
let includeNumbers = false;

// Добавляем обработчик события на клик
addsymb.addEventListener('click', function() {
    if (this.style.backgroundColor === 'rgb(141, 245, 130)') {  // Зеленый цвет
        this.style.backgroundColor = 'rgb(250, 201, 201)';  // Возвращаем исходный цвет
    } else {
        this.style.backgroundColor = '#8df582';  // Меняем на зеленый
    }
    includeSymbols = !includeSymbols;
});

addnumb.addEventListener('click', function() {
    if (this.style.backgroundColor === 'rgb(141, 245, 130)') {  // Зеленый цвет
        this.style.backgroundColor = 'rgb(250, 201, 201)';  // Возвращаем исходный цвет
    } else {
        this.style.backgroundColor = '#8df582';  // Меняем на зеленый
    }
    includeNumbers = !includeNumbers;
});

// Получаем элементы ползунка и поля ввода
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

// Обработчик события для ползунка
priceRange.addEventListener('input', function() {
    // Когда ползунок изменяется, обновляем значение в поле ввода
    priceValue.value = priceRange.value;
});

// Обработчик события для поля ввода
priceValue.addEventListener('input', function() {
    // Получаем введённое значение из поля ввода и преобразуем в число
    const value = parseInt(priceValue.value);

    // Проверка, находится ли введённое значение в допустимом диапазоне (от 0 до 20)
    if (value >= 0 && value <= 20) {
        // Если значение в допустимом диапазоне, обновляем ползунок
        priceRange.value = value;
    } else {
        // Если значение выходит за диапазон, возвращаем поле ввода к последнему значению ползунка
        priceValue.value = priceRange.value;
    }
});

function generatePassword(lenght){
    const lettres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
    
    let charset = lettres;

    if(includeNumbers){
        charset += numbers;
    }

    if(includeSymbols){
        charset += symbols;
    }

let password = "";
for(i = 0; i < lenght; i++){
    const randomIndex = Math.floor(Math.random()*charset.length);
    password += charset[randomIndex];
}

passwordInput.value = password;
}
 
generateButton.addEventListener('click', function(){
    const lenght = parseInt(priceRange.value);
    generatePassword(lenght);
});

copier.addEventListener('click', function() {
    navigator.clipboard.writeText(passwordInput.value)
    .then(() => {
        alert("The text has been copied to the clipboard!");
    })
    .catch(err => {
        console.error("Failed to copy text: ", err);
    });
});