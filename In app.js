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

movies.map(function(movie) {
    return `${movie.title} - ${movie.score / 10}`
})


const newMovies movies.map(function(movie) {
    return `${movie.title} - ${movie.score / 10}`
})


const newMovies = movies.map(movie => (
    return `${movie.title} - ${movie.score / 10}`
))


const newMovies = movies.map(movie => `${movie.title} - ${movie.score / 10}`)

// Video :-> 234 setTime and setInterval

// print "hello..."
// pause(3000)
// print "are you still tehere?"

console.log("HELLO!!!...")
setTimeout(() => {
    console.log("...are you still there")
}, 3000)

console.log("GOODBYE!!")


setInterval(() => {
    console.log(Math.random())
}, 2000);


const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

// clearInterval(id);


// video :->235 The filter Method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

numbers.filter(n => {
    return n < 10
})

const movies = [
    {
        title: 'Amadeus'
        score: 99,
        year: 1984
    },
    {
        title: 'Shaknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30'
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

const goodMovies = movies.filter(movie => {
    return movie.score > 80
})

const goodMovies = movies.filter(m => m.score > 80)
const goodTitles = goodMovies.map(m > m.title)

movies.filter(m => m.score > 80).map(m = > m.title);

const badMovies = movies.filter(m => m.score < 70)

const recentMovies = movies.filter(m => m.year > 2000)