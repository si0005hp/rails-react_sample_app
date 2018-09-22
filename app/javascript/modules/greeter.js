export default class Greeter {
    constructor(name) {
        this.name = name;
    }

    hello() {
        const elem = document.getElementById('message');
        elem.innerHTML = `Hello, ${this.name}!`;
    }
}