// Основная функция, принимающая первое число
function createSumFunction(num1) {
    // Возвращаемая функция, принимающая второе число
    return function(num2) {
        // Возвращаем сумму двух чисел
        return num1 + num2;
    };
}

// Пример использования:
const sumWith5 = createSumFunction(5); // Создаем функцию, которая прибавляет 5 к любому числу
console.log(sumWith5(3)); // Выводит: 8 (5 + 3)

const sumWith10 = createSumFunction(10); // Создаем функцию, которая прибавляет 10 к любому числу
console.log(sumWith10(7)); // Выводит: 17 (10 + 7)