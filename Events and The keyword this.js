const makeRandomCOlor = () => {
    const r = math.floor(Math.random() * 255);
    const g = math.floor(Math.random() * 255);
    const b = math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// const button = documnet.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function () {
        // console.log("CLICKED")
        button.style.backgroundColor = makeRandomColor();
        button.style.color = makeRandomColor();
    })
}

// for (let this of buttons) {
//     this.addEventListener('click', function () {
//         // console.log("CLICKED")
//         this.style.backgroundColor = makeRandomColor();
//         this.style.color = makeRandomColor();
//     })
// }

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', function () {
        console.log(this)
        this.style.backgroundColor = makeRandomColor();
         this.style.color = makeRandColor();
        // h1.style.backgroundColor = makeRandomColor();
        // h1.style.color = makeRandColor();
    })
}






function colorize() {
    
}




// for (let this of buttons) {
//     button.addEventListener('click', colorize)
//     }


// const h1s = document.querySelectorAll('h1');
// for (let h1 of h1s) {
//     h1.addEventListener('click', colorize) 
//     }