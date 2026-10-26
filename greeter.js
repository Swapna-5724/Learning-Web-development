// const args = process.argv.slice(2);
// for (let arg of args) {
//     console.log(`Hi there , ${arg}`)
// }

// //     node boilterplate.js Project

// //     Project
// //     ..index.html
// //     ..app.css
// //     ..app.js


// // touch boilerplate.js     ->     create boilerplate.js file

// //  01

// //         const fs = require('fs');
// //         console.log(fs)

// //         fs.mkdir('/tmp/a/apple', {recursive: true }, (err) => {
// //             if (err) throw err;
// //         });


// // node boilerplate.js

// //  02

// const fs = require('fs');
// // console.log(fs)
// const folderName = process.argv(2) || 'Project'

// fs.mkdir('Dogs', {recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });
// console.log("I COME AFTER MKDIR IN THE FILE!!")

// // Synchronous Function

// fs.mkdirSync('Cats');
// asdasd
// console.log("I COME AFTER MKDIR IN THE FILE!!")







// //   IN node

// //  ls
// //  rmdir Dogs
// //  ls
// //  node boilerplate.js
// //  
// // node oilerplate.js chickens
// // ls
// // ls chickens
// // node boilerplate.js
// // ls








// correct code

const fs = require('fs');
const folderName = process.argv(2) || 'project'

// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
// });

    // fs.mkdirSync(folderName);
    // fs.writeFileSync('${folderName}/index.html')
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/app.js`)
    fs.writeFileSync(`${folderName}/style.css`)
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!")
    console.log(e);
}




//  node boilerplate.js Chickens
//  ls
//  ls Chickens
//  node boilerplate.js
//  ls
//  node boilerplate.js Portfolio
//  ls
//  cd Portifolio
//  ls
//  ls
//  cd..
//  ls
//  cd..
//  ls
//  cd lizardProject
//  ls
//  cd ..
//  ls
