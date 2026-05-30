const form = document.querySelector("#shelterForm");
form.addEventListener("submit", function (e) {
    console.log("SUBMITTED!!!");
    console.log("SUBMITTED!!!");
    console.log("SUBMITTED!!!");
    console.log("SUBMITTED!!!");
    console.log("SUBMITTED!!!");
    console.log("SUBMITTED!!!");
    console.log("SUBMITTED!!!");
});

const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("list");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log("SUBMITTED THE FORM!");
    // console.log(input.value);
    const newLI = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    // console.log(newLI);
    list.appendC(newLI);
});



// Video :- 271 :-   Practice with Form Events & PreventDefault






// In console :
input
input.value
input.value
input.value = ""
