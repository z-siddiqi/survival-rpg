export class Item {
    constructor(name, healthBoost) {
        this.name = name;
        this.healthBoost = healthBoost;
    }

    displayInfo() {
        console.log(`${this.name} increases your health by ${this.healthBoost}!`);
    }

    getHealthEffect(){
        return this.healthBoost;
    }

    getName(){
        return this.name;
    }
}

// example items
let burger = new Item("burger", 2);
burger.displayInfo();
