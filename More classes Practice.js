class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calHSL();
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
        const { r, g, b } = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }
    hsl(){
        const {h,s,l} = this;
        return `hsl(${h},${s}%, ${l}%)`;
    }
    // hsl() {
    //     const {h,s,l} = this;
    //     return `hsl(${})`
    // }
    fullySaturated(){
         return `hsl(${h},100%, ${l}%)`;
    }
    opposite(){
        const { h, s, l } = this;
        // 200 + 180
        const newHue = (h + 180) % 360;
        return `hsl(${newHue},${s}%, ${l}%)`;

    }
    calHSL() {
        // const { r, g, b } = this;
        let { r, g, b} = this;
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0) h = 0;
        else if (cmax == r)
            // Red is max
        h = ((g - b) / delta) % 6;
        else if(cmax == g)
            // Green is max
        h = (b - r) / delta + 2;
        else
            // Green is max
        h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        //Make negative hues positive behind 360°
        if (h < 0) h += 360;
        // Calculate lightness
        l = (cmax + cmin) / 2;

        //Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        //Multiply l and s by 100         //  01
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;

        // //Multiply l and s by 100         //  02
        // s = +(s * 100).toFixed(1);
        // l = +(l * 100).toFixed(1);
        // return [h, s, l]
    }
}
const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');


// "hsl(210, 80%, 10%)"
//
//  document.body.style.backgroundColor = red.hsl()  ->  updated body
//  document.body.style.backgroundColor = red.opposite()  ->  updated body





















//   IN CONSOLE:
//   white
//   white.hsl()
//   red.hsl()
//   document.body.style.backgroundColor = red.hsl()   ->   "hsl(353,100%, 63.1%)"
//   document.body.style.backgroundColor = red.fyllySaturated()   ->  "hsl(353, 100%, 63.1%)"
//   new Color(230, 126, 34, 'carrot')
//   document.body.style.backgroundColor = orange.hsl()
//   document.body.style.backgroundColor = orange.fullySaturated()
//   document.body.style.backgroundColor = orange.rgb()
//   document.body.style.backgroundColor = orange.fullySaturated()
//   document.body.style.backgroundColor = orange.opposite()







//  Clear code:-

// class Color {
//     constructor(r, g, b, name) {
//         this.r = r;
//         this.r = g;
//         this.r = b;
//         this.name = name;
//         this.calcHSL();
//     }
//     innerRGB() {
//         const { r, g, b } = this;
//         return `${r}, ${g}, ${b}`;
//     }
//     rgb() {
//         return `rgb(${this.innerRGB()})`;
//     }
//     rgba(a = 1.0) {
//         return 'rgba(${this.innerRGB()}, ${a})';
//     }
//     hex() {
//         const { r, g, b } = this;
//         return (
//             '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//         );
//     }
//     hsl() {
//     const { h, s, l } = this;
//     return `hsl(${h},${s}%, ${l})`;
//     }
//     fullySaturated() {
//         const { h, l } = this;
//         return `hsl(${h},100%, ${l}%)`;
//     }
//     opposite() {
//         const { h, s, l } = this;
//         const newHue = (h + 180) % 360;
//         return `hsl(${newHue},${s}%, ${l}%)`;
//     }
//     calcHSL() {
//         let { r, g, b } = this;
//         //Make r, g, and b fractions of 1
//         r /= 255;
//         g /= 255;
//         b /= 255;

//         //Find greatest and smallest channel values
//         let cmin = Math.min(r, g, b),
//           cmax = Math.max(r, g, b),
//           delta = cmax - cmin,
//           h = 0,
//           s = 0,
//           l = 0;
//         if (delta == 0) h = 0;
//         else if (cmax == r)
//             //Red is max
//             h = ((g - b) / delta) % 6;
//         else if(cmax == g)
//             // Green is max
//             h = (b - r) / delta + 2;
//         else
//             // Green is max
//             h = (r - g) / delta + 4;

//         h = Math.round(h * 60);

//         //Make negative hues positive behind 360°
//         if (h < 0) h += 360;
//         // Calculate lightness
//         l = (cmax + cmin) / 2;

//         //Calculate saturation
//         s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

//         //Multiply l and s by 100    
//         s = +(s * 100).toFixed(1);
//         l = +(l * 100).toFixed(1);
//         this.h = h;
//         this.s = s;
//         this.l = l;
//     }
// }
// const red = new Color(255, 67, 89, 'tomato');
// const white = new Color(255, 255, 255, 'white');
