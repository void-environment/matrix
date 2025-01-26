/**
 * Базовые класс для работы с матрицами, реализующий операции сложения и вычитания.
 */
export class Matrix {
    /**
     * Конструктор класса Matrix.
     * Инициализирует объект и задает значение по умолчанию для результата ошибок.
     */
    constructor() 
    {
        this.ERROR_RESULT = null;
    }

    /**
     * Проверяет, что размеры двух матриц совпадают.
     *
     * @param {Array<Array<number>>} a - Первая матрица.
     * @param {ArrayArray<Array<number>>} b - Вторая матрица.
     * @throws {Error} Если размеры матриц не совпадают.
     */
    validate(a, b) 
    {
        if (a.length !== b.length || !a.every((row, i) => row.length === b[i].length)) {
            throw new Error('The matrices are not the same!');
        }
    }

    /**
     * Выполняет операцию над матрицами.
     *
     * @param {Array<Array<number>>} a - Первая матрица.
     * @param {Array<Array<number>>} b - Вторая матрица.
     * @param {Function} operation - Функция, определяющая операцию между элементами (например, (a, b) => a + b).
     * @returns {Array<Array<number>> | null} Результат выполнения операции или `null` в случае ошибки.
     */
    operate(a, b, operation) {
        let result = [];

        try {
            this.validate(a, b);
        } catch (error) {
            console.error(error.message);
            return this.ERROR_RESULT;
        }

        a.forEach((r, i) => {
            let row = [];
            r.forEach((value, j) => {
                row.push(operation(value, b[i][j]));
            });
            result.push(row);
        });

        return result;
    }

    /**
     * Выполняет сложение двух матриц.
     *
     * @param {Array<Array<number>>} a - Первая матрица.
     * @param {Array<Array<number>>} b - Вторая матрица.
     * @returns {Array<Array<number>> | null} Матрица-результат сложения или `null` в случае ошибки.
     */
    addition(a, b) {
        return this.operate(a, b, (_a, _b) => _a + _b);
    }

    /**
     * Выполняет вычитание одной матрицы из другой.
     *
     * @param {Array<Array<number>>} a - Первая матрица.
     * @param {Array<Array<number>>} b - Вторая матрица.
     * @returns {Array<Array<number>> | null} Матрица-результат вычитания или `null` в случае ошибки.
     */
    subtract(a, b) {
        return this.operate(a, b, (_a, _b) => _a - _b);
    }
}