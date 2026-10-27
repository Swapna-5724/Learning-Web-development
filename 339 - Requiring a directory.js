// - cd clone
// - ls
// - cd 26_modules_NPM
// - ls
//      ->  app.js  math.js
// - mkdir shelter
// - cd shelter
// - ls
// - touch blue.js sadie.js janet.js                      ->  In shelter folder there are blue.js, janet.js and sadie.js files



// In Blue.js file

module.exports = {
    name: 'blue',
    color: 'grey'
}






//  In janet.js file

module.exports = {
    name: 'janet',
    color: 'orange'
}




// In sadie.js file

module.exports = {
    name: 'sadie',
    color: 'black'
}



// create new file in the shelter folder that is index.js


//  In index.js file

const blue = require('./blue')
const sadie = require('./sadie')
const janet = require('./janet')

const allCats = [blue, sadie, janet]
// console.log(allCats);

module.exports = allCats;



// - cd..

// - ls
//  ->  app.js  math.js  shelter


// In app.js File

const { PI, square } = require('./math');

const cats = require('./shelter')
// console.log(PI)

// console.log(square(9))
console.log("REQUIRED AN ENTIRE DIRECTORY!", cats)


// - ls