// This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"
function makeColor(r, g, b) {
    const color = {}
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function() {
        const { r, g, b } = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    };
    return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex(); //fisrtColor.hex();
firstColor.rgb(); //"rgb(35, 255, 150)"

const black = makeColor(0, 0, 0);
black.rgb(); //"rgb(0, 0, 0)"
black.hex(); //"#0000s00"

// Creates a blank, plain Javascript object;
// Links (sets the constructor of) this object to another object;
// Passes the newly created object from Step 1 as the this context;
// Returns this if the function doesn't return its own object. 

// function rgb(){

// }

// function rgb2()



function Color(r, g, b) {            // 01
    this.r = r;
    this.g = g;
    this.b = b;
}



function Color(r, g, b) {            // 02
    // const o = {}
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this);
    // return o
}

new Color(255, 40, 100);




function Color(r, g, b) {            // 03
    this.r = r;
    this.g = g;
    this.b = b;
    this.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
}





function Color(r, g, b) {            // 04  -> define the prototupe outside of the constructor 
    this.r = r;
    this.g = g;
    this.b = b;
}

color.prototype.rgb = function() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a=1.0) {
     const { r, g, b } = this;
     return `rgba(${r}, ${g}, ${b}, ${a})`;
};


const color1 = new Color(40, 50, 60);
const color2 = new Color(0, 0, 0);

color1.hex()
color2.hex()










//   IN CONSOLE:
//   new Array()
//   new String()
//   
//   black
//   firstColor
// 
//   black.hex === firstColor.hex
//   "hi".slice ==="bye".slice
//   [1,2,3,4]

//   Color {r: 255, g: 40, b: 100}        //Refresh
//   Color(255,0,0)

//   new Color(255, 0, 0)

//   color1
//   color1.rgb()

// color1.hex()
// color2.hex()
// color1.hex === color2.hex
// color1

// color1.rgb()

// document.body.style.backgroundColor = "rgb(40, 255, 60)"
// document.body.style.backgroundColor = color1.rgb()          ->  As a default parameter
// document.body.style.backgroundColor = color1.rgba(0.8)         
// document.body.style.backgroundColor = color1.rgba(0.7)
// document.body.style.backgroundColor = color1.rgba(0.4)
// document.body.style.backgroundColor = color1.rgba(0.2)
// document.body.style.backgroundColor = color1.rgba(0.1)