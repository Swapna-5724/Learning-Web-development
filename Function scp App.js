// function collectEggs() {
//     let totalEggs = 6;
//     console.log(totalEggs)
// }


// let totalEggs = 0;
// unction collectEggs() {
//     totalEggs = 6;
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird = 'Scarlet Macaw';
// function birdWatch() {
//     let bird = 'Great Blue Heron';
// }
// console.log(bird);


            // let bird = 'Scarlet Macaw';
            // function birdWatch() {
            //     // let bird = 'Great Blue Heron';
            //     console.log(bird);
            // }
            // birdWatch()


// video :-> 219 Block Scope

// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIII!'
// }

// console.log(radius);
//  // console.log(PI)
// console.log(msg)

// for (let i = 0; i<5; i++) {
//     var let msg = "ASKIDJAKISJD";
//     console.log(i)
// }
// // console.log(msg)
// console.log(i)


// video :-> 220 :-  Lexical Scope

function bankRobbery() {
    const heroes = ['spiderman', 'Wolverine', 'Black Panther', 'BatWomen']
    function cryForHelp() {
        let color = 'purple';
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}