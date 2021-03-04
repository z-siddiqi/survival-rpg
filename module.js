// Stores player information 

export class Player {
    constructor(name, health=10){
        this.name = name;
        this.health = health;
        this.inventory = [];
    }

    getHealth(){
        return this.health;
    }

    getName(){
        return this.name;
    }

    addHealth(amount){
        return this.health += amount;
    }

    takeDamage(damage){
        return this.health -= damage;
    }

    checkInventory(){  
        if (this.inventory.length!=0){
           return this.inventory; 
        }
        else {
            console.log("Your inventory is empty");
            return this.inventory;
        }
    }

    putInBag(item){
        this.inventory.push(item);
        return this.inventory;
    }

    use(item){
        if (!this.inventory.includes(item)){
            console.log(`You do not have a ${item}`);
        } else{
            this.inventory = this.inventory.filter(i => i !== item);
            console.log(`You used a ${item}. \nInventory: ${this.inventory}`);
        }

        return this.checkInventory();
    }

}