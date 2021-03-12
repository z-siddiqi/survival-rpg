export class Character{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.position = [1, 1];
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getPosition() {
        return this.position;
    }

    setPosition(position) {
        this.position = position;
    }

    takeDamage(amount) {
        if (typeof amount !== "undefined") {
            this.health -= amount;
            //console.log(`You have taken ${amount} damage.`);
        }
    }

    validatePosition() {
        return (this.position[0] >= 0 && this.position[0] <= 3) && (this.position[1] >= 0 && this.position[1] <= 3);
    }

    move() {
    }
}