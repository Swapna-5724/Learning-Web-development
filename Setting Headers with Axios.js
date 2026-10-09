





















const fetchBitcoin = async () => {
    try {
        const res = await axios.get('https://api.cryptonator.')
        console.log(res.data.ticker.price)
    } catch (e) {
        console.log("ERROR!", e)
    }
}


const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');
button.addEventListener('click', )

const addNewJoke = () => {
    
    const newLI = document.createElement('LI');
    newLI.appendChild(res.data.joke);
    jokes.append(newLI)
}
const getDadJoke = async () => {
    const config = { headers : { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    console.log(res.data.joke)
    // const newLI = document.createElement('LI');
    // newLI.appendChild(res.data.joke);
    // jokes.append(newLI)
}


