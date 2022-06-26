class Formatter {


    constructor() {
        this.prefix = "Hello";
    }

    append(text) {
        return `${this.prefix} ${text}`;
    }
}

export {Formatter};