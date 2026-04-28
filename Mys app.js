const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        // console.log("MEOW MEOW MEOW");
        // console.log(color);
        // console.log(`${this.name} `);
        console.log("THIS IS:", this)
        console.log(`${this.name} says MeOWWWW`);
    }
}


const meow2 = cat.meow;


    // IN CONSOLE:

    // cat.meow()
    // meow2
    // cat.meow()
    // this
    // meow2

    // window

    // function scream() {
    //     console.log("AHHHHHAHHHHHHHHH")
    // }

    // scream()

    // window.scream

    // window.scream()

    // window.alert("ASKLDJAS")