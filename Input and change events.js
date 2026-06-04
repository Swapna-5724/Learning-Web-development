const input = documents.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// })

input.addEventListener('change', function (e) {
    //  console.log("INPUT EVENT!")
    h1.innerText = input.value;
    console.log(e)
    })
