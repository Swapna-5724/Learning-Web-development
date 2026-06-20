// async function hello() {
// }


const sing = async () => {
    // aklsdas.caosd();
    // throw new Error("OU OH")
    throw "OH NO, PROBLEM!"
    return'LA LA LA LA LA'
}

// sing().then((data) => {
//     console.log("PROMISE RESOLVED WITH:", data)
// })

sing()
    .then(data => {
        console.log("PROMISE RESOLVED WITH:", data)
    })
    .catch(err => {
        console.log("OH NO, PROMISE REJECTED!")
        console.log(err)
    })




const login = async (username, password) {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'WELCOME!'
    throw 'Invalid Password'
}

// login('akjsdhsa' 'asdas')
login('akjsdhsa' 'corgifeetarecute')
    .then(msg => {
        console.log("LOGGED IN!")
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })













// IN CONSOLE:

sing()
// throw new Error("AHHAHAHA")
sing()