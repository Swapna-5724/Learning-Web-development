//   Method -> 01
// String.prototype.yell = function() {
//     console.log(this);
// };

//   Method -> 02
String.prototype.yell = function() {
    console.log(this.toUpperCase());
};

//   Method -> 03
String.prototype.yell = function() {
    return `${this.toUpperCase()}!!!!!!!!`
};

//   Method -> 04
String.prototype.yell = function() {                                 //More exclamation point
    return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
};

Array.prototype.pop = function() {
    return 'SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!';
};






//   IN CONSOLE:-

//   [3,4,5].pop()
//   const nums = [7,8,9]
//   nums
//   const dog = 'timothy'
//   dog.__proto__