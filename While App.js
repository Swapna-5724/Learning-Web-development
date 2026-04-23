let count = 0;
while(count < 10) {
    // console.log(count)
    count++;
    console.log(count)
}

for (let i = 1; i <= 10; i++)

 while(!gameOver) {
    //player 1 move
    //player 2 move
 }   


const SECRET = "BabyHippo";


let guess = prompt("enter the secret code...");
while (guess !== SECRET) {
    guess = prompt("enter the secret code...")
}
console.log("CONGRATS YOU GOT THE SECRET!!!")

// video :-> 204 -> The break Keyword

// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if(input.toLowerCase === "stop copying me") {
//         break;
//     }
// }
// console.log("OK YOU WIN!")

    //  OR

let input = prompt("Hey, say something!")
while (true) {
    input = prompt(input);
    if(input.toLowerCase === "stop copying me") break;
    
}
console.log("OK YOU WIN!")

for (let i =0; i < 1000; i++) {
    console.log(i);
    if(i === 100) break;
}