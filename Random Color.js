const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function (){
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    // console.log("CLICKASDAS")

    // document.body.style.backgroundColor = 'olive';

    // const r = Math.floor(Math.random() * 255);
    // const g = Math.floor(Math.random() * 255);
    // const b = Math.floor(Math.random() * 255);
    // const newColor = `rgb(${r}, ${g}, ${b})`;
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}









// In Console:

// document.querySelector('body')
// document.body