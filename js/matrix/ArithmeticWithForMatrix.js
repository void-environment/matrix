import Matrix from './Matrix.js';

export default class ArithmeticWithForMatrix extends Matrix {

    constructor() 
    {
        super();
    }

    addition(a, b)
    {
        try {
            Matrix.validate(a, b);
        } catch (error) {
            console.error(error.message);
            return Matrix.ERROR_RESULT;
        }

        let result = [];

        for (let i = 0; i < a.length; i++) {
            let row = [];
            for(let j = 0; j < a[i].length; j++){
                row.push(a[i][j] + b[i][j]);
            }
            result.push(row);
        }

        return result;
    }

    subtract(a, b)
    {
        try {
            Matrix.validate(a, b);
        } catch (error) {
            console.error(error.message);
            return Matrix.ERROR_RESULT;
        }

        let result = [];

        for (let i = 0; i < a.length; i++) {
            let row = [];
            for(let j = 0; j < a[i].length; j++){
                row.push(a[i][j] - b[i][j]);
            }
            result.push(row);
        }

        return result;
    }
}