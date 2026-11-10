// - ls
// - npm init -y

// - npm i express

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("HI")
})

app.get('/', (req, res) => {
    res.send('home.ejs')
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})

// - mkdir views
// - ls

// - touch views/home.ejs


//  In home.ejs  file

