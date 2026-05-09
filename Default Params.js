function rollDie(numSides){
    return Math.floor(Math.random() * numSides) + 1
}

function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}


[
function greet(msg, person) {
    // return `${msg}, ${person}!`
    console.log(`${msg}, ${person}!`)
}

function greet(msg = "Hey there", person) {
    console.log(`${msg}, ${person}!`)
}

function greet(person, msg = "Hey there", punc = '!') {
    console.log(`${msg}, ${person}!`)
}

function greet(person, msg = "Hey there", punc = '!') {
    console.log(`${msg}, ${person}${punc}`)
}

]

// video :-> 241  spread in function calls

            // [
            //     IN console web Page:
            //     Math.max(13,4,5,21,3,3,1,2,7,6,4,2,53456)
            //     Math.min(2,5,1)
            //     const nums = [13,4,5,21,3,3,1,2,7,6,4,2,53456]
            //     Math.max(nums)   //NaN
            //     Math.max(...nums)   //53456
            //     Math.min(...nums)
            //     console.log("asd", "as", "asdasd", "asdsa")
            //     console.log(nums)
            //     console.log(...nums)
            //     console.log('hello')
            //     console.log(...'hello')
            //     console.log('h', 'e', 'l')
            // ]




// video :-> 242 spread With Array Literals

const cats = ['Blue', 'Scout', 'Rocket'];
// const copy = [...cats]
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs]

                // [
                //     IN console:
                //     [...dogs, ...cats, 'speedy']
                //     [1,2,3,...dogs, ...cats, 'speedy']

                //     ["hello"]
                //     [..."hello"]
                // ]




// video :-> 243 Spread with Objects

const feline = { legs: 4, family: 'Felidae'};
const canline = {isFurry: true, family: 'Caninae'}

                // [
                //     In console:
                //     {...feline}
                //     feline
                //     {...feline, color: 'black'}
                //     const catDog = {...feline, ...canline}
                //     catDog
                //     {...canline, ...feline}
                //     {...canline, ...feline, family: 'Steele'}

                //     {...[2,4,6,8]}
                //     {..."HIII"}
                // ]


    
const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}
const newUser = {...dataFromForm, id: 2345, isAdmin: false}



// video :-> 244 Rest Params


function sum(){
    return arguments.reduce((total, el) => total + el)
    console.log(arguments)
}

function sum(...nums) {
    console.log(nums)
}

function sum(...nums) {
    return arguments.reduce((total, el) => total + el)
}




// sum(3,4,6,7,8,1,2,3,4,1,2,3)

[
    IN console:
    Math.min(1,2,3,4,5,1,2,3,4,5)
    sum()
    sum(35,65,77)
]


function receResults(gold, silver, ...everyoneElse){
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}


// video :-> 245 Destructuring Arrays

const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;


// video :-> 246 Destructuring Objects

const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors'
    city:'San Francisco'
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}


// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;
// const { email, firstName, lastName, city, bio} = user;

// const { born: bithYear, died: deathYear = 'N/A' } = user;


const { city, state, died = 'N/A' } = user2






// video :-> 247 Destructuring Params

function fullName(user) {
    return `${user.firstName} ${user.lastName}`
}

function fullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`
}

function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`
}

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going on 30',
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
        title: 'jingle All The Way',
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

// movies.filter((movie) => movie.score >= 90)
movies.filter(({ score }) => score >= 90)

movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
})

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})

