
//Create adventurer object and assign it an sub-object to Leo
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat", 
        companionOfRobin:{
            name: "Frank",
            type: "Cat",
            belongings: ['hat', 'sunglasses']
        }
    },
}

//Print out the word sword
console.log( adventurer.inventory[0]);

 //Create a loop that logs each item in Robin’s inventory.
 adventurer.inventory.forEach((element)=>{
    console.log(element);

 })


//Call roll method that was asigned to adventurer
adventurer.roll()


