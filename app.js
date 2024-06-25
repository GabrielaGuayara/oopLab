const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat", 
        //Next, give Robin’s feline friend a friend of his own:
        // Add a “companion” sub-object to “Leo” with the following properties:
        // The companion’s name is “Frank.”
        // The companion’s type is “Flea.”
        // The companion has its own belongings, which includes a small hat and sunglasses.
        companionOfRobin:{
            name: "Frank",
            type: "Cat",
            belongings: ['hat', 'sunglasses']
        }
    },

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        
    }
}


 //create a loop that logs each item in Robin’s inventory.
 adventurer.inventory.forEach((element)=>{
    console.log(element);

 })


adventurer.roll()

