// - ls
// - mkdir FirstApp
// - cd FirstApp
// - ls
// - npm init -y


//   In Package.json file, add the following line to the scripts object:
                    // {
                    //     "name": "firstApp",
                    //     "version": "1.0.0",
                    //     "description": "",
                    //     "main": "index.js",
                    //     "scripts": {
                    //         "test": "echo \"Error: no test specified\" && exit 1",
                    //     },
                    //     "keywords": [],
                    //     "author": "",
                    //     "license": "ISC"
                    // }

// - npm install express
// - touch index.js


const express = require("express");
const app = express();
// console.dir(app)

app.use(() => {
    console.log("WE GOT A NEW REQUEST!!")
})

// - touch index.js
// - node index.js

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080!")
})

// - node index.js
// -      > LISTENING ON PORT 8080!











































