const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit", function(e) {
    // console.log("SUBMITTED!!!");
    e.preventDefault();
    // console.log("SUMITTED THE FORM!")
    const catName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catName;
    list.appendChild(newLI);
    input.value = "";
});

