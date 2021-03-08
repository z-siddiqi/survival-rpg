export class Item {
    constructor(name, healthBoost) {
        this.name = name;
        this.healthBoost = healthBoost;
    }

    getInfo() {
        return `${this.name} increases your health by ${this.healthBoost}!`;
    }
}
