// Stores player information 

export class Player {
    constructor(name, health=10){
        this.name = name;
        this.health = health;
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

}