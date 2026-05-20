const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!")
}

function scream() {
    console.log("AAAAAAHHHHH");
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream;


// In Console:

btn
console.dir(btn)

btn.onclick

const button1 = document.querySelector('button')
console.dir(button1)

// document.querySelector('h1').onclick = function () {
//     alert('you clicked the h1!')
// }
// document.querySelector('h1').onclick = alert('you clicked the h1!')
document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}
