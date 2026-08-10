const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)
console.log("BEFORE")
isRightTriangle(3,4,5)

console.log("DONEEEE!")




// latenflip.com/loupe/    ->   In Google




// IN CONSOLE:

isRightTriangle(3,4,5)
isRightTriangle(3,4,8)