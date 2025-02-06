function analyzeArrayElements(arr) {
    // Инициализируем счётчики
    let evenCount = 0; // Чётные числа
    let oddCount = 0;  // Нечётные числа
    let zeroCount = 0; // Нули

    // Проходим по каждому элементу массива
    for (let element of arr) {
        // Проверяем, является ли элемент числом
        if (typeof element === 'number') {
            if (element === 0) {
                zeroCount++; // Увеличиваем счётчик нулей
            } else if (element % 2 === 0) {
                evenCount++; // Увеличиваем счётчик чётных чисел
            } else {
                oddCount++; // Увеличиваем счётчик нечётных чисел
            }
        }
    }

    // Выводим результаты в консоль
    console.log(`Количество чётных элементов: ${evenCount}`);
    console.log(`Количество нечётных элементов: ${oddCount}`);
    console.log(`Количество нулевых элементов: ${zeroCount}`);
}

// Пример вызова функции
const array = [1, 2, 3, 0, 4, null, 'a', 5, 6, 0, 7, NaN, 8];
analyzeArrayElements(array);