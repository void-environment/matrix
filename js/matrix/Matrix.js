export default class Matrix {

    static ERROR_RESULT = null;

    static validate(a, b) {
        if (a.length !== b.length || !a.every((row, i) => row.length === b[i].length)) {
            throw new Error('The matrices are not the same!');
        }
    }

    constructor() {}
}