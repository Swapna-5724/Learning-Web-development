
//   IN Terminal

// node
// node -v
// node


// process.version
// process.release
// process.cwd()    ->   Methods
// process.argv
// .exit
//  ls
// touch args.js
// node args.js


console.log("HELLO FROM ARGS FILE!")
console.log(process.argv)

// node args.js puppies chickens hello
//      clear
// touch greeter.js


// in greeter.js File

const args = process.argv.slice(2);
for(let arg of args){
    console.log(`Hi there, ${arg}`)
}

