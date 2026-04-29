const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]



const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})


const add = function(x, y) {
    return x + y;
}


// function (x, y) {
//     return x + y;
// }

            // (x, y) => {

            // }

const add = (x, y) => {
    return x + y;
}

const square = (x) => {
    return x * x;
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

//  Video :-> 232 Arrow Function Implicit Returns

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)


const add = (a, b) => a + b


//  Video :-> 233 Arrow Functions wrapup

