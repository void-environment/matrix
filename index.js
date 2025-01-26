/**
 * Аннотации взяты:
 * {@link https://jsdoc.app/ JSDoc}.
 * 
 * @fileoverview Скрипт демонстрирует использование класса `Matrix` для выполнения операций 
 * сложения и вычитания матриц. Пример включает обработку корректных и некорректных матриц. 
 * 
 * @author [void-environment]
 * @version 1.0.0
 * 
 * @requires ./Matrix.js
 */

/**
 * Импортирует класс `Matrix` для работы с матрицами.
 */
import { Matrix } from './Matrix.js';

/**
 * @constant {number[][]} A
 * Матрица `A` — первая матрица для операций.
 */
const A = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

/**
 * @constant {number[][]} B
 * Матрица `B` — вторая матрица для операций.
 */
const B = [
    [9, 8, 7, 6],
    [5, 4, 3, 2],
    [1, 0, -1, -2]
];

/**
 * @constant {number[][]} C
 * Матрица `C` — пример некорректной матрицы.
 */
const C = [
    [9, 8, 7, 6],
    [5, 4, 3, 2],
    [],
    [1, 0, -1, -2]
];

/**
 * Создает экземпляр класса Matrix для выполнения операций с матрицами.
 * @type {Matrix}
 */
const matrix = new Matrix();

/**
 * @example
 * Пример корректного сложения двух матриц:
 * matrix.addition(A, B);
 * @returns {ArrayArray<Array<number>> | Error} - Результат операции сложения.
 */
console.log(matrix.addition(A, B)); // [ [ 10, 10, 10, 10 ], [ 10, 10, 10, 10 ], [ 10, 10, 10, 10 ] ]

/**
 * @example
 * Пример корректного вычитания двух матриц:
 * matrix.subtract(A, B);
 * @returns {ArrayArray<Array<number>> | Error} - Результат операции вычитания.
 */
console.log(matrix.subtract(A, B)); // [ [ -8, -6, -4, -2 ], [ 0, 2, 4, 6 ], [ 8, 10, 12, 14 ] ]

/**
 * @example
 * Пример некорректного ввода:
 * matrix.subtract(A, B);
 * @returns {ArrayArray<Array<number>> | Error} - Результат некорректного ввода.
 */
console.log(matrix.subtract(A, C)); // null // The matrices are not the same!