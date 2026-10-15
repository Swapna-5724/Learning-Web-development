// // This is a Constructor Functoion...
// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// // If you call it on its own like a regular function...
// Color(35, 60, 190); //undefined
// // It returns undefined.seems useless!

// // ****************
// // THE NEW OPERATOR
// // ****************

// // 1. Creates a blank, Plain Javascript object;
// // 2. Links (Sets the constructor of) this object to another object;
// // 3. Passes the newly created object from step 1 as the this context;
// // 4. Returns this if the function doesn't return its own object.

// Color.prototype.rgb = function() {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function() {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function(a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// };

// const color1 = new Color(40, 255, 60);
// color1.hex();
// const color2 = new Color(0, 0, 0);
// color2.hex();

class Color {                                // 01
    constructor(r,g,b){
        console.log('INSIDE CONSTRUCTOR');
        console.log(r, g, b);
    }
}
const c1 = new Color(255, 67, 89);


class Color {                                // 02
    constructor(r, g, b, name) {
        this.r = r;
        this.b = b;
        this.g = g;
        this.name = name;
    }
    greet(){
        // return "HELLO FROM A COLOR!!";
        return `HELLO FROM ${this.name}!`;
    }
}
const c2 = new Color(255, 67, 89, 'tomato');
// rgb(255, 67, 89)


class Color {                                // 03
    constructor(r, g, b, name) {
        this.r = r;
        this.b = b;
        this.g = g;
        this.name = name;
    }
    innerRGB(){
         const { r, g, b } = this;
         return `rgb`${r}, ${g}, ${b}`;
         'rgb(255, 255, 255)'
    }
    rgb() {
        return `rgb(${this.innerRGB()})`;
    }
        
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
        // return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    hex(){
        const { r, g, b } = this;
        // return 'rgba(${r}, ${g}, ${b}, ${a})';
        return (
         '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }
}
// const c3 = new Color(255, 67, 89, 'tomato');
// // "rgb(255, 67, 89)"

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 67, 89, 'white');
// "rgb(255, 255, 255)"









//   IN CONSOLE:
// const c1 = new Color(255, 67, 89);
//  -> INSIDE CONSTRUCTOR!
//  -> 255 67, 89
//  c1
//  cl.greet()

//  const white = new Color(255,255,255, 'white')
//  white.greet()

// c1.hex()

// white.hex()
//   -> "#ffffff"

// red.hex()
//   -> "#ff4359"

// red.hex === white.hex
//   -> true

// red

// white.rgba()
// red.rgba()
// red.rgba(0.4)
// document.body.style.backgroundColor = red.rgba()
// document.body.style.backgroundColor = red.rgba(0.5)
// document.body.style.backgroundColor = red.rgba(0.1)

