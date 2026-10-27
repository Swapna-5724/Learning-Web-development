// - ls
// - touch math.js



// In math.js


// const add = (x, y) => x + y;
module.exports.add = (x, y) => x + y;

module.exports.PI = 3.14159;
// const PI = 3.14159;

const square = x => x * x;

exports.square = square;
exports = "ALKSDJAAKLJSDJASKLA"
exports.square = square;``
exports.PI = PI;

                                            // const math = {
                                            //     add. add,
                                            //     PI: PI,
                                            //     square: square
                                            // }

                                            // module.exports = math;

// // module.exports = "HELLOOO"
// =================================
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// - node app.js


const Module = require('node:module');
//  - touch app.js



// In app.js

// const math = require('math');
const math = require('./math');
console.log(math)

// - node app.js
    // {}


//  01

const math = require('./math');
console.log(math.PI)

console.log('./math');
console.log(math.PI)

console.log(math.square(9))

//  02

const math = require('./math');
console.log(PI)

consolelog(square(9))



