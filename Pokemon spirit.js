// https://raw.githubusercontent.com/PokeAPI/spirites/master/sprites/pokemon/1.png

// const container = document.querySelector('#conatiner');
// const newImg = document.createElement('img');
// newImg.src = 'https://raw.githubusercontent.com/PokeAPI/spirites/master/sprites/pokemon/';
// conatiner.appendChild(newImg)


const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/spirites/master/sprites/pokemon/';


for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`

    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    // container.appendChild(newImg)
    container.appendChild(pokemon)
}


/* <div>
    <img>
    <span>2</span>
</div> */




// const baseURL = 'http://img4.wikia.nocookie.net/__cb20140724195345/pokemon/images/thumb/7/73/004Charmander.png/200px-004Charmander.png'