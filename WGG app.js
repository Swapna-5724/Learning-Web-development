let maximum = parseInt(prompt("Enter the maximum number!"));
if(!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

// Math.floor(Math.random() * 10) + 1
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter Your first guess!"));
let attempts = 1;

while (guess !== targetNum) 
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:")
    } else {
        guess = prompt("Too low! Enter a new guess:")
    }

if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`you got it! It took you ${attempts} guesses`)
}

// console.log("YOU GOT IT!")
console.log(`You got it! It took you ${attempts} guesses`)