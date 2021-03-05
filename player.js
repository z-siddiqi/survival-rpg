import readlineSync from "readline-sync";

// Stores player information 

export class Player {
    constructor(name = "Player", health = 10) {
        this.name = name;
        this.health = health;
        this.inventory = [];
        this.position = [1, 1];
    }

    inputMovevement() {
        console.log("Input movement: ");
        movementInput: while (true) {
            var playerMovement = readlineSync.question(">");
            switch (playerMovement) {
                case "w":
                    this.move(0, -1);
                    break movementInput;
                case "a":
                    this.move(1, -1);
                    break movementInput;
                case "s":
                    this.move(0, 1);
                    break movementInput;
                case "d":
                    this.move(1, 1);
                    break movementInput;
                default:
                    console.log("Error! Invalid movement!");
            }
        }
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

    getHealth() {
        return this.health;
    }

    getName() {
        return this.name;
    }

    setName(s) {
        return this.name = s;
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

    useItem(item) {
        if (!this.inventory.includes(item)) {
            console.log(`You do not have a ${item}.`);
        } else {
            this.inventory = this.inventory.filter(i => i !== item);
            console.log(`You used a ${item}.`);
        }
    }

    resetInventory() {
        this.inventory = [];
    }

    checkStatus() {
        console.log(`Name: ${this.name}\nHealth: ${this.health}`)
    }

    checkInventory() {
        let s;
        if (this.inventory.length !== 0) {
            for (var i of this.inventory) {
                s += `\n${i} `;
            };
        } else {
            s = "Your inventory is empty.";
        }
        console.log(`Inventory:\n------------\n${s}\n------------`);
    }
}
