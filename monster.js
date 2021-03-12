import { Character } from "./character.js";

export class Monster extends Character() {
    constructor(name = "Monster", health = 10) {
        super(name, health)
    }
}