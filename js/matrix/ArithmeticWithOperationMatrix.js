import Matrix from './Matrix.js';

export default class ArithmeticWithOperationMatrix extends Matrix {

    constructor() 
    {
        super();
    }

    operate(a, b, operation) {
        let result = [];

        try {
            Matrix.validate(a, b);
        } catch (error) {
            console.error(error.message);
            return Matrix.ERROR_RESULT;
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

    addition(a, b) {
        return this.operate(a, b, (_a, _b) => _a + _b);
    }

    subtract(a, b) {
        return this.operate(a, b, (_a, _b) => _a + _b);
    }
}