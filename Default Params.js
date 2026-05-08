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

]