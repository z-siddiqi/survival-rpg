export class Inventory {
    constructor(){
        this.bag = [];
    }

    addToInventory(item) {
        if (typeof item !== "undefined") {
            this.inventory.push(item);
            console.log(`${item.name} added to your inventory.`)
        }
    }

    getInventoryString() {
        let inventoryString = "";
        if (this.inventory.length !== 0) {
            inventoryString += "Inventory:\n";
            for (let item of this.inventory) {
                inventoryString += item.name + "\n";
            }
        }
        return inventoryString;
    }
}