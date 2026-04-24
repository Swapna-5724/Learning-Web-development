let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

// Math.floor(Math.random() * 10) + 1
const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// MATH.FLOOR
// let guess = parseInt(prompt("Enter Your first guess!"));
let guess = prompt("Enter Your first guess! (Type 'q' to quit )");
let attempts = 1;

while (parseInt(guess) !== targetNum) 
    if (guess === 'q') break;   
    guess = parseInt(guess);
    // attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:")
        attempts++;
    }
    else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:")
        attempts++;
    }
    else {
        guess = prompt("Invalid guess. PLease enter a number or 'q'to quit")
    }

if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`you got it! It took you ${attempts} guesses`)
}

// console.log("YOU GOT IT!")
// console.log(`You got it! It took you ${attempts} guesses`)