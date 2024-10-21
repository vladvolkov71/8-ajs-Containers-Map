export class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }
    translate(code) {
        if (this.errors.has(code)) {
            return this.errors.get(code);
        } else {
            return 'Unknown error';
        }
    }
}