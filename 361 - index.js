const express = require('express');
const app = express();
const path = require('path');

app.set('vie engine', 'ejs');
app.set('view', path.join(__diename, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    // res.render('random', { rand: num })
    res.render('random', { rand })
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})