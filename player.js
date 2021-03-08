import readlineSync from "readline-sync";
import { Item } from "./item.js";

export class Player {
    constructor(name = "Player", health = 10) {
        this.name = name;
        this.health = health;
        this.inventory = [];
        this.position = [1, 1];
    }

    move(direction, movement) {
        this.position[direction] += movement;
        if (!this.validatePosition()) {
            console.log("You are at the edge of the map. Teleporting you to a random position!");
            this.position = [...Array(2)].map(() => Math.floor(Math.random() * 4));
        }
    }

    validatePosition() {
        return (this.position[0] >= 0 && this.position[0] <= 3) && (this.position[1] >= 0 && this.position[1] <= 3);
    }

    addHealth(amount) {
        if (typeof amount !== "undefined") {
            this.health += amount
            console.log(`You have added ${amount} health.`);
        }
    }

    takeDamage(amount) {
        if (typeof amount !== "undefined") {
            this.health -= amount;
            console.log(`You have taken ${amount} damage.`);
        }
    }

    addToInventory(item) {
        if (typeof item !== "undefined") {
            this.inventory.push(item);
            console.log(`${item.name} added to your inventory.`)
        }
    }

    useItem(itemName, callback) {
        let item = this.inventory.filter(i => {
            return i.name === itemName;
        })[0]  // only want the first item

        if (item === undefined) {
            console.log(`You do not have a ${itemName}.`);
        } else {
            this.inventory = this.inventory.filter(i => i !== item);
            let outcome = { "health": item.healthBoost };
            callback(outcome);
        }
    }

    checkInventory() {
        let inventoryString = "";
        if (this.inventory.length === 0) {
            inventoryString = "Your inventory is empty.";
        } else {
            inventoryString += "Inventory:\n";
            for (let item of this.inventory) {
                inventoryString += item.name + "\n";
            }
        }
        return inventoryString;
    }
}
