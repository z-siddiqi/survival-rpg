import readlineSync from "readline-sync";

export class Player {
    constructor(name = "Player", health = 10) {
        this.name = name;
        this.health = health;
        this.inventory = [];
        this.position = [1, 1];
    }

    inputAction() {
        console.log("Input action.");
        activeInput: while (true) {
            var playerMovement = readlineSync.question(">");
            switch (playerMovement) {
                case "move":
                    this.inputMovevement();
                    break activeInput;
                case "use item":
                    this.inputItem();
                    break activeInput;
                default:
                    console.log("Error! Invalid action!");
            }
        }
    }

    inputMovevement() {
        console.log("Input movement using 'WASD' keys.");
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

    inputItem() {
        console.log("Which item would you like to use?");
        this.checkInventory();
        let playerItem = readlineSync.question(">");
        this.useItem(playerItem, (outcome) => {
            this.addHealth(outcome["health"]);
        });
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
        })

        if (!item) {
            console.log(`You do not have a ${itemName}.`);
        } else {
            this.inventory = this.inventory.filter(i => i !== item);
            let outcome = { "health": item.healthBoost };
            callback(outcome);
        }
    }

    checkInventory() {
        if (this.inventory.length === 0) {
            console.log("Your inventory is empty.");
        } else {
            console.log("Inventory:\n");
            for (let item of this.inventory) {
                console.log(item.name);
            }
        }
    }
}
