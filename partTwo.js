class Character {

    static MAX_HEALTH = 100;

    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        
    
    }
  
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin)


//Part three: class Adventurer extends Character {
    class Adventurer extends Character {
    
        static ROLES = ["Fighter", "Healer", "Wizard"]
    
        constructor (name, role) {
          super(name);
          // Adventurers have specialized roles.
          this.role = ROLES;
          // Every adventurer starts with a bed and 50 gold coins.
          this.inventory.push("bedroll", "50 gold coins");
        }
        // Adventurers have the ability to scout ahead of them.
        scout () {
          console.log(`${this.name} is scouting ahead...`);
          super.roll();
        }

        skiiting(){
            console.log(`${this.name} is skiiting with ${this.inventory[3]}`)
        }
      }

      //create a Companion class with properties and methods specific to the companions.
class Companion extends Character {
    constructor(name, type){
        super(name);
        this.type = type;
    }

//Method to help the adventurer

    helper(){
        console.log(`${this.name} of type ${this.type} is Robin's helper.`)
    }

}

//change the declaration of Robin and the companions to use the new Adventurer and Companion classes.
const Robin = new Adventurer ("Robin", "Human")
Robin.inventory = ["Sword", "potion", 'artifact']
Robin.companion = new Companion("Leo", "Cat");
Robin.companion.companion = new Companion("Frank","Flea");
Robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(Robin)
