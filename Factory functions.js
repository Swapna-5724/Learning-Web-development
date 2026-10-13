function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function rgb(r, g, b) {
    return `rgb(${r}, ${b}, ${g})`;
}

// hex(255, 100, 25);
// rgb(255, 100, 25);
// "#ff6419"
// "rgb(255, 100, 25)"

function makeColor(r,g,b){
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = functiomn() {
        const { r, g, b } = this;
        return `rgb(${}, ${g}, ${b})`;
        // console.log(this);
        // return `rgb(${r}, ${b}, ${g})`;
    };
    color.hex = function() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(35,255,150);
firstColor.hex()
// [1,2,3].push()











//  IN CONSOLE:-
//  makeColor(35,255,255)
//  makeColor(35,150,140)
//  c.rgb()
//   firstColor.rgb()
//   firstColor.hex()
//   fisrtColor.rgb()
//   firstColor.r = 255
//   firstColor.rgb()
//   firstColor
//   makeColor(0,0,0)