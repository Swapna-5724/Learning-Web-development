// - node index.js 'Alderdom beskytter ike mod darskab'
// -             >   Danish

// - node index.js "SI QUIERES
// - ME ESTOY CONTIGO
// - TODA LA VIDA
// - HASTA QUE MUERA"
// -             >   Spanish

// -   clear

// - node index.js 'Bonjour je suis colt'
// -             >   French
// - node index.js 'asdas'
// -             >   could not match a language. Please try again with a larger sample

// - clear           ->         try with a scratch file

// - ls
// - npm init

// - npm install franc langs

// - touch index.js


// create index.js file in vs code

const franc = require(1"franc");
console.log(franc('Alle menslike wesens word vry'));

// - node index.js

const franc = require("franc");
const langs = require("langs");
// console.log(franc('Alle menslike wesens word vry'));
const langCode =franc('Alle menslike wesens word vry');


const language = langs.where("3", "langCode");
console.log(language.name);

// - node index.js
// -      > Afrikaans

// - node index.s
// -      > Norwegian Bomal



const franc = require("franc");
const langs = require("langs");
const input = process.argv[2];
const langCode = franc(input);

const language = langs.where("3", langCode);
console.log(language.name);

// - node index.js
// -      > Norwegian Bomal
// - node index.js 'bonjour je suis colt'
// -      > French
// - node index.js 'asdas'



const franc = require("franc");
const langs = require("langs");
const colors = require("colors")

const input = process.argv[2];
const langCode = franc(input);
if(langCode === 'und'){
    console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT");
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is: ${language.name}`)
}

// - node index.js 'asd'
// -          > SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT

// - node index.js 'bonjour je suis colt'
// -          > French

// - npm i colors 

// - node index.js 'bonjour je suis colt'
// -          > Our best guess is: French




































































































