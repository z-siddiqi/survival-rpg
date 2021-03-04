export class Items{
    constructor(food, drink, medicine){
        this.food  = food;
        this.drink = drink;
        this.medicine = medicine;
        
    }

    getFood(){
        return this.food;
    }

    getDrink(){
        return this.drink
    }

    getMedicine(){
        return this.medicine
    }

    foodInfo(){
        console.log(`${this.food} increases your health by 2!`);
    }

    drinkInfo(){
        console.log( `${this.drink} increases your health by 5!`);
    }

    medicineInfo(){
        console.log(`${this.medicine} increases your health by 8!`)
    }

}