// Stores player information 

export class Player {
    constructor(name = "Player", health = 10, level) {
        this.name = name;
        this.health = health;
        this.inventory = [];
        this.actions = ["attack", "run"];
        this.level = level;
    }

    movement() {
        let movements = ["w", "a", "s", "d"];
        return new Promise((resolve, reject) => {
            let rl = readline.createInterface(process.stdin, process.stdout);
            rl.setPrompt(">");
            rl.prompt();
            rl.on('line', (playerMovement) => {
                if (movements.includes(!playerMovement)) {
                    console.log("Error! Invalid movement!");
                } else {
                    // handle movement
                }
                rl.prompt()
            }).on('close', function () {
                resolve("");
            });
        })
    }

    getHealth() {
        return this.health;
    }

    getName() {
        return this.name;
    }

    setName(s){
        return this.name = s;
    }

    addHealth(amount) {
        console.log(`You have added ${amount} health.`);
        return this.health += amount;
    }

    takeDamage(damage) {
        console.log(`You have taken ${damage} damage.`);
        return this.health -= damage;
    }

    checkInventory() {
        if (this.inventory.length != 0) {
            //return this.inventory; 
            this.printInventory();
        }
        else {
            console.log("Your inventory is empty.");
        }
    }

    putInBag(item) {
        this.inventory.push(item);
        console.log(`You have put ${item} in your bag.`)
        return this.inventory;
    }

    use(item) {
        if (!this.inventory.includes(item)) {
            console.log(`You do not have a ${item}.`);
        } else {
            this.inventory = this.inventory.filter(i => i !== item);
            console.log(`You used a ${item}.`);
        }
        return this.inventory;
    }

    printStatus() {
        console.log(`Name: ${this.name} \nHealth: ${this.health}`)
    }

    printInventory() {
        if (this.inventory.length == 0) {
            return;
        }
        var s = "";
        for (var i of this.inventory) {
            s += `\n${i} `;
        };
        console.log(`Inventory: \n------------${s}\n------------`);
    }

    resetInventory() {
        return this.inventory = [];
    }

}