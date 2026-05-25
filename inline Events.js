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

// document.querySelector('h1').onclick = function () {
//     alert('you clicked the h1!')
// }

document.querySelector('h1').onclick = function () = alert('you clicked the h1!')

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1')
}

// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('click', fucntion () {
//     alert('CLICKED!')
// })

// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('dbclick', fucntion () {
//     alert('CLICKED!')
// })

// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('mouseup', fucntion () {
//     alert('CLICKED!')
// })

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', scream);

function twist() {
    console.log("TWIST")
}

function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

tasButton.onclick = twist;
tasButton.onclick = shout;

// tasButton.addEventListener('click', twist)
// tasButton.addEventListener('click', shout)

// tasButton.addEventListener('click', twist, { once: true})
// tasButton.addEventListener('click', shout)

// tasButton.addEventListener('click', twist, { once: true})
// tasButton.addEventListener('click', shout, {once: true})

tasButton.addEventListener('click', () => {

})
tasButton.addEventListener('click', shout)



























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
