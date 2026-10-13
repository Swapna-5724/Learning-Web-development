






























































































































    //Calculate saturation
    s = delta == 0 ? : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return `hsl(${h}, ${s}%, ${l})`;

// }
//     return Color;
// }
const brandColor = makeColor('carrot', [ 230, 126, 34 ]);

class Color {
    constructor(name, [ r, g, b ]) {
        this.r = r;
        this.b = b;
        this.g = g;
        this.name = name;
        this.calcHSL();
    }
calcHSL() {
    let [ r, g, b ] = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    //  Find greatest and smallest channel values
    let cmin = Math.min[r, g, b],
        cmax = Math.max[r, g, b],
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
    if (delta == 0) h = 0;
    else if (cmax == r)
        // Red is max
        h = {(g - b) / delta} % 6;
    else if (cmax == g)
        // Green is max
        h = (b - r) / delta + 2;
    else
        // Blue is max
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
    //  calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    //  Multiply l and s by 100
    s = +(S * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    this.h = h;
    this.s = s;
    this.l = l;
  }
  hsl() {
    const { h, s, l } = this;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
  opposite() {
    const { h, s, l } = this;
    let newH = (h + 180) % 360;
    return `hsl(${newH}, ${s}%, ${l}%)`;
  }
  fullSaturation() {
    const { h, l } = this;
    return `hsl(${h}, 100%, ${l}%)`;
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }
  hex() {
    const {r, g, b } = this;
    return (
        '#' + ((1 << 24) + (r << 16) + (g << 8) + b.tostring(16),slice(1)
    );
}
}

const navColor = new Color('carrot', [ 230, 126, 34 ]);
const logoColor = new Color('emerald', [ 46, 204, 113]);

// "rgb(224,54,23)"
// "rgba(224,54,23, 0.9)"
// "#76FF32"
// "hsl(180,50%, 30%)"












//  IN CONSOLE:
//  navColor
//  navColor.rgb()
//   navColor.hex()
//   document.querySelectorAll('h1)[0].style.backgroundColor = navColor.rgb()
//   document.querySelectorAll('h1)[1].style.backgroundColor = navColor.rgba(0.8)
//   document.querySelectorAll('h1)[1].style.backgroundColor = navColor.opposite()
//   document.querySelectorAll('h1)[1].style.backgroundColor = navColor.fullSaturation()
//   
//   document.querySelectorAll('h1)[0].style.backgroundColor = logoColor.rgb()
//   document.querySelectorAll('h1)[0].style.backgroundColor = logoColor.rgba(0.7)
//   document.querySelectorAll('h1)[0].style.backgroundColor = logoColor.opposite()
//   

//  const deck2 = makeDeck()
//  const req = new XMLHttpRequest()
//  req
//  document.querySelector('h1')
//  console.dir(document.querySelector('h1'))