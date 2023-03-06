// Task 1: Create a Pokemon object
const myPokemon = {
    name: String,
    attack: Number,
    defense: Number,
    health: Number,
    healthperm: Number,
    type: String,
    takeDamage: Number,
    attackOpponent: Number,
    display: String
};

function Pokemon(name, attack, defense, health, type) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.healthperm = health;
    this.type = type;
    this.takeDamage = takeDamage;
    this.attackOpponent = attackOpponent;
    this.display = display;
  }


/**
 * Task 2: Implement a `takeDamage()` method for the Pokemon which takes a number as an argument and reduces the `.health` of the 
*`Pokemon` by that number.
*/
function takeDamage(damage) {
    this.health = this.health - damage;
    if (this.health <= 0){
        this.health = 0;
    }
}

/**
 * Task 3: Implement attackOpponent() method for the `Pokemon` class which takes a `Pokemon` object as an argument 
*(the opponent being attacked). This method should call the `takeDamage()` method of the opposing `Pokemon` and provide 
*the appropriate damage as an argument.
*/
function attackOpponent(opponent) {
    if (this.attack <= opponent.defense){
       victum.takeDamage(1);
    } else{
        let damage = this.attack - opponent.defense;
        opponent.takeDamage(damage);
    }
}

/** 
 * Task 4: Implement a `display()` method for the `Pokemon` class which takes no arguments and returns a string with the
 * Pokemon's `.name` in all caps, `.type` in all caps and in parenthesis, and `.health` with a forward-slash, " / ", followed
 * by the `.health` the `Pokemon` was initialized with.
 */
function display() {
    healthperm = this.healthperm;
    display = (this.name).toUpperCase() + " (" + (this.type).toUpperCase() + ") " + this.health + "/" + healthperm;
    return display;
}

// Don't edit this line!
module.exports = Pokemon;
