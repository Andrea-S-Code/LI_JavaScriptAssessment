// Task 1: Create a Pokemon object
const Pokemon = {
    name: String,
    attack: Number,
    defense: Number,
    health: Number,
    type: String
};
const charmander = new Pokemon("charmander", 12, 8, 30, "fire");
        console.log(charmander.name);    // charmander
        console.log(charmander.attack);  // 12
        console.log(charmander.defense); // 8
        console.log(charmander.health);  // 30
        console.log(charmander.type);    // fire

/**
 * Task 2: Implement a `takeDamage()` method for the Pokemon which takes a number as an argument and reduces the `.health` of the 
*`Pokemon` by that number.
*/
function takeDamage(damage) {
    health = health - damage;
    if (health <= 0){
        health = 0;
    }
}

/**
 * Task 3: Implement attackOpponent() method for the `Pokemon` class which takes a `Pokemon` object as an argument 
*(the opponent being attacked). This method should call the `takeDamage()` method of the opposing `Pokemon` and provide 
*the appropriate damage as an argument.
*/
function attackOpponent(victum) {
    if (Pokemon.attack <= victum.defense){
       victum.takeDamage(1);
    } else{
        damage = Pokemon.attack - victum.defense;
        victum.takeDamage(damage);
    }
}

/** 
 * Task 4: Implement a `display()` method for the `Pokemon` class which takes no arguments and returns a string with the
 * Pokemon's `.name` in all caps, `.type` in all caps and in parenthesis, and `.health` with a forward-slash, " / ", followed
 * by the `.health` the `Pokemon` was initialized with.
 */
function display() {
    display = Pokemon.name.isUppercase() + "(" + Pokemon.type.isUppercase() + ")" + Pokemon.health + "/" + Pokemon.health;
    console.log(display);
}

// Don't edit this line!
module.exports = Pokemon;
