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
            //     Math.max(nums)
            //     Math.max(...nums)
            //     Math.min(...nums)
            //     console.log("asd", "as", "asdasd", "asdsa")
            //     console.log(nums)
            //     console.log(...nums)
            //     console.log('hello')
            //     console.log(...'hello')
            //     console.log('h', 'e', 'l')
            // ]