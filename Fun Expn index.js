// function add(x, y) {
//     return x + y;
// }

const add = function (x, y) {
    return x + y;
}

// video :-> 222 Higher Order function

function callTwice(func) {
    func();
    func();
}

function callTenTimes(f){
    for(let i = 0; i < 10; i++){
        f()
    }
}
// callTwice(1)
function rollDie(){
    const roll = Math.floor(Math.random * 6) + 1
    console.log()
}

callTwice(rollDie)



// IN CONSOLE

let greet = function() {console.log("HI!")}
greet
greet()

