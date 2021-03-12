import { Character } from "./character.js";
import { Inventory } from "./inventory.js";

export class Player extends Character {
    constructor(name = "Player", health = 10) {
        super(name, health)
        this.inventory = new Inventory();
    }

    move(direction, movement) {
        this.position[direction] += movement;
        if (!this.validatePosition()) {
            console.log("You are at the edge of the map. Teleporting you to a random position!");
            this.position = [...Array(2)].map(() => Math.floor(Math.random() * 4));
        }
    }

    addHealth(amount) {
        if (typeof amount !== "undefined") {
            this.health += amount
            console.log(`You have added ${amount} health.`);
        }
    }

    useItem(itemName, callback) {
        let item = this.inventory.bag.filter(i => {
            return i.name.toLowerCase() === itemName.toLowerCase();
        })[0]  // only want the first item

        if (item === undefined) {
            console.log(`You do not have a ${itemName}.`);
        } else {
            this.inventory.bag = this.inventory.bag.filter(i => i !== item);
            let outcome = { "health": item.healthBoost };
            callback(outcome);
        }
    }

}
