class Pet{
    constructor(name, age){
        console.log("IN PET CONSTRUCTOR")
        this.name = name;
        this.age = age
    }
    eat() {
        return `${this.name} is eating!`;
    }
}
class Cat extends Pet{
    constructor(name,age, livesLeft = 9){
        console.log("IN CAT CONSTRUCTOR!")
        super(name, age)
        // this.name = name;
        // this.age = age;
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOWWWW!!';
    }
}

class Dog extends Pet{
    bark() {
        return "WOOOFF!!"
    }
    eat() {
        return `${this.name} scarfs his food!`;
    }
}











// class Cat {                                  //   1st time 
//     constructor(name, age){
//         this.name = name;
//         this.age = age
//     }
//     eat() {
//         return `${this.name} is eating!`;
//     }
//     meow() {
//         return 'MEOWWWW!!';
//     }
// }

// class Dog {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating!`;
//     }
//     bark() {
//         return "WOOOFF!!"
//     }
// }










































//  IN CONSOLE:-
//
//  const monty = new Cat('monty', 9)
//  monty
//  monty.eat()     ->  monty is eating
//
//  const Wyatt = new Dog('Wyatt', 13)
//  wyatt
// wyatt.eat()

// const wyatt = new Dog('Wyatt', 13)
// wyatt

// const monty = newCat('monty', 9)
// monty