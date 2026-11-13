const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.listen(3000, () = {
    console.log("LISTENING ON PORT 3000")
})


// - ls
// - nodemon index.js

// - cd..
// - ls
// - nodemon Templating_Demo/index.js

// - process.cwd()            ->           Current directory working inside of this

// nodemon Templating_Demo/index.js

// cd Templating_Demo
// ls
// ndemon index.js
