export class Inventory {
    constructor() {
        this.bag = [];
    }

    addToBag(item) {
        if (typeof item !== "undefined") {
            this.bag.push(item);
            console.log(`${item.name} added to your inventory.`)
        }
    }

    getInventoryString() {
        let inventoryString = "";
        if (this.bag.length !== 0) {
            inventoryString += "Inventory:\n";
            for (let item of this.bag) {
                inventoryString += item.name + "\n";
            }
        }
        return inventoryString;
    }
}
