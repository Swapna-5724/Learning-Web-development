// console.log("ITS WORKING!!!")

// console.log("BEFORE CONDITIONAL")
// // Math.random()
// let random = Math.random();
// if (1 + 1 == 2) {
//     console.log("MATH STILL WORKS!")
// }
// console.log("AFTER CONDITIONAL")


// [console.log("BEFORE CONDITIONAL")
// let random = Math.random();
// if (random < 0.5) {
//    console.log("YOUR NUMBER IS LESS THAN 0.5!!!")
//    console.log(random);
// }

// if (random >= 0.5) {
//     console.log("YOUR NUMBER IS GREATER (or EQUAL) THAN 0.5!!!")
// } 
// console.log(random);


// let rating = 3;

// if (rating === 3) {
//     console.log("YOU ARE A SUPERSTAR!");
// }]



// const dayOfWeek = ('ENTER A DAY').toLowerCase();

// const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("UGHHH I HATE MONDAYS!");
// } 
// else if (dayOfWeek === 'saturday') {
//     console.log("YAY I LOVE SATURDAYS!");
// }
// else if (dayOfWeek === 'friday') {
//     console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!");
// }
// else {
//     console.log("MEH");
// }


// else if (dayOfWeek === 'Tuesday') {
//     console.log("MEH")
// }
// else if (dayOfWeek === 'Wednesday') {
//     console.log("MEH")
// } 
// else if (dayOfWeek === 'Thursday') {
//     console.log("MEH")
// } 
// else if (dayOfWeek === 'Friday') {
//     console.log("MEH")
// }

// 0-5 - FREE 
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10


// const age = 890;

// if (age < 5) {
//     console.log("You are a baby. You get in for free!")
// } 
//  else if (age < 10) {
//     console.log("You are a Child. You pay $10")
// } 
//  else if (age < 65) {
//     console.log("You are an adult. You pay $20")
// } 
//  else {
//     console.log("You are a senior. You pay $10")
// }

// if 
// else
    
// if else

// if else

// if 
// else


// const password = prompt("Please Enter a new password");

// // Password must be 6+ characters
// if (password.length >= 6) {
//     // password cannot include space
//     console.log("LONG ENOUGH PASSWORD!")
// } else {
//     console.log("PASSWORD TOO SHORT! Must be 6+ characters")
// }
// // Password cannot include space

// if (password.indexOf(' ') === -1) {
//     // console.log("Good job! No space!")
//     console.log("Valid Password!");
// } else {
//     console.log("password cannot conatin spaces!")
// } else {
//     console.log("PASSWORD TOO SHORT! Must be 6+ characters")
// }


// const password = prompt("Please Enter a new password");

// // Password must be 6+ characters
// if (password.length >= 6) {
//     // password cannot include space
// if (password.indexOf(' ') === -1) {
//     console.log("Valid Password!");
// } else {
//     console.log("password cannot conatin spaces!")
//     }

// } else {
//     console.log("PASSWORD TOO SHORT! Must be 6+ characters")
// } 


if (0) {
    console.log("TRUTHY")
} else {
    console.log("FASY")
}

// -1  ->   NULL  ->    NaN  
if (-1) {    
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}

if (' ') {    
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}


// in console we should code
// true && true
// true && false 
// false && false
// false && true
// 1 == 1 && 2 < 7


// true || true
// true || false
// false || true
// false || false


const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("VALID PASSWORD!")
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD!")
}


// 0 - 5 free
// 5 - 10 $10
// 10 - 65 $20
// 65+ free

const age = 90;
// if (age < 5) {
if ((age >= 0 && age < 5) || age >= 65) {
    console.log("FREE");
} else if (age >= 5 && age < 10) {
    console.log("$10")
} else if (age >= 10 && age < 65) {
    console.log("$20")
} else {
    console.log("INVALID AGE!")
}

// LOGICAL NOT:-

// let firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("TRY AGAIN!!!");
// }

const age = 45;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("YPU ARE NOT A BABY OR A SENIOR!")
}


// false
// !false
// !(1 === 1)
// null
// !!!!!!!!!!!!!null


// SWITCH STATEMENT:-

const day = 2;
switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break; 
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSAY");
        break;
    case 5;
        console.log("FRIDAY");
        break;
    case 6;
    case 7;
        console.log("WEEKEND!")
    default:
        console.log("I DON'T KNOW THAT")
}
// const day = 2;
// if (day === 1) {
//     console.log("MONDAY")
// } 
//     else if (day === 2) {
//     console.log("TUESDAY")
// }  
//     else if (day ===3) {
//     console.log("WEDNESDAY")
// }  
//     else if (day === 4) {
//     console.log("THURSDAY")
// }  
//     else if (day === 5) {
//     console.log("FRIDAY")
// }