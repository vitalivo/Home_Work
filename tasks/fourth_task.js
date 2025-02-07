function printNumbers(start, end) {
    // Проверяем, что start <= end
    if (start > end) {
        console.error("Начальное число должно быть меньше или равно конечному числу.");
        return;
    }

    let current = start; // Текущее число для вывода

    // Запускаем setInterval
    const intervalId = setInterval(() => {
        console.log(current); // Выводим текущее число
        current++; // Увеличиваем текущее число

        // Если достигли конечного числа, останавливаем интервал
        if (current > end) {
            clearInterval(intervalId);
        }
    }, 1000); // Интервал в 1 секунду (1000 миллисекунд)
}

// Пример использования:
printNumbers(5, 15);