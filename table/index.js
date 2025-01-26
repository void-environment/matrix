/**
 * Интерфейсы для аннотаций: https://developer.mozilla.org/ru/docs/Web/API
 * В таблице 5х5 расставить цифры 0 или 1.
 * На странице расположить три кнопки, каждая из которых меняет цвет ячеек на жёлтый.
 * Второя кнопка выводит всплываюее сообщение с надписью: сколько ячеек с нулями имеют рядом с собой больше двух ячеек с единицей. 
 * Рядом считать сверху, снизу слева или справа.
 */

/** 
 * Коллекция ячеек таблицы.
 * @type {NodeListOf<HTMLTableCellElement>} 
*/
const cells = document.querySelectorAll('td');

/** 
 * Коллекция строк таблицы.
 * @type {NodeListOf<HTMLTableRowElement>}
*/
const rows = document.querySelectorAll('tr');

/** 
 * Коллекция кнопок.
 * @type {NodeList<HTMLButtonElement>} 
*/
const buttons = document.querySelectorAll('button');

/**
 * Генерация случайных чисел 0 и 1 для каждой ячеейки.
 */
cells.forEach(cell => {
    cell.textContent = Math.round(Math.random());
});

/**
 * обработчик событий для кнопок.
 */
buttons.forEach(button => {
    button.addEventListener('click', () => {

        // При нажатии на кнопку с классом `get-result` вызывает функцию `getResult`.
        if(button.classList.contains('get-result')){
            getResult();
        }

        // При нажатии на любую из кнопок - меняет цвет на `yellow`.
        cells.forEach(cell => {
            cell.style.background = 'yellow';
        });
    })
});

/**
 * Подсчитывает количество ячеек с нулями, у которых рядом больше двух ячеек с единицей.
 * Рядом считаются ячейки сверху, снизу, слева и справа.
 * Результат отображается во всплывающем сообщении (alert).
 */
function getResult(){

    let count = 0;

    // Цикл, проходящий по каждой строке таблицы.
    for(let ri = 0; ri < rows.length; ri++) {

        // Получение всех ячеек текущей строки ri
        const cells = rows[ri].querySelectorAll('td');

        // Цикл, проходящий по каждой ячейке строки.
        for(let ci = 0; ci < cells.length; ci++){

            // Преобразуем содержимое ячейки в тип number(int).
            let cell = parseInt(cells[ci].textContent);

            if(cell === 0) {
                // Нахождение кол-во соседних ячеек с единицей.
                // eсли условие выполняется, увеличиваем счётчик.
                count += indexSide(ri, ci);
            }
        }
        
    }

    // Вывод результата.
    alert(count);
    // Завершение функции.
    return;
}

/**
 * Проверяет, сколько соседних ячеек с единицей у указанной ячейки.
 * @param {number} ri - Индекс строки текущей ячейки.
 * @param {number} ci - Индекс столбца текущей ячейки.
 * @returns {number} Возвращает 1, если у ячейки больше двух соседей с единицей, иначе 0.
 */
function indexSide(ri, ci){

    let count = 0; // Счётчик.

    // Проверяем ячейку сверху (если она существует).
    if (ri > 0) {
        const up = rows[ri - 1].querySelectorAll('td')[ci];
        // Если значение ячейки сверху равно 1
        if (parseInt(up.textContent) === 1) count++;
    }

    // Проверяем ячейку снизу (если она существует).
    if (ri < rows.length - 1) { 
        const down = rows[ri + 1].querySelectorAll('td')[ci];
        // Если значение ячейки снизу равно 1.
        if (parseInt(down.textContent) === 1) count++;
    }

    // Проверяем ячейку справа (по диагонали) в следующей строке (если она существует).
    if (ri < rows.length - 1 && ci < rows[ri].querySelectorAll('td').length - 1) {
        const downRight = rows[ri + 1].querySelectorAll('td')[ci + 1];
        // Если значение ячейки справа (по диагонали) в следующей строке равно 1.
        if (parseInt(downRight.textContent) === 1) count++;
    }

    // Если кол-во ячеек с единицей больше двух, возвращаем 1, иначе 0.
    return count > 2 ? 1 : 0;
}