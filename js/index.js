import ArithmeticWithForMatrix from './matrix/ArithmeticWithForMatrix.js';
import ArithmeticWithOperationMatrix from './matrix/ArithmeticWithOperationMatrix.js';

const A = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

const B = [
    [9, 8, 7, 6],
    [5, 4, 3, 2],
    [1, 0, -1, -2]
];

const C = [
    [9, 8, 7, 6],
    [5, 4, 3, 2],
    [],
    [1, 0, -1, -2]
];

const matrixWithOperation = new ArithmeticWithOperationMatrix();
const matrixWithFor = new ArithmeticWithForMatrix();

console.log(matrixWithOperation.addition(A, B));
console.log(matrixWithFor.subtract(A, B));

// Exception
console.log(matrixWithFor.subtract(A, C));

/*
Run: node index.js

Result:
[ [ 10, 10, 10, 10 ], [ 10, 10, 10, 10 ], [ 10, 10, 10, 10 ] ]
[ [ -8, -6, -4, -2 ], [ 0, 2, 4, 6 ], [ 8, 10, 12, 14 ] ]

*/