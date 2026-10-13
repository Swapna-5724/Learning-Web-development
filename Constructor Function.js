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
    // const o = {}
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this);
    // return o
}

new Color(255, 40, 100);




function Color(r, g, b) {            // 02
    this.r = r;
    this.g = g;
    this.b = b;
    this.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
}


















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