function makeMysteryfnc() {
    const rand = Math.random();
    if(rand > 0.5){
        return function() {
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("YOU WIN A MILLION DOLLARS!!")
        }
        else {
            return function() {
                alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
                alert("STOP TRYING TO CLOSE THIS WINDOW!")
                alert("STOP TRYING TO CLOSE THIS WINDOW!")
                alert("STOP TRYING TO CLOSE THIS WINDOW!")
                alert("STOP TRYING TO CLOSE THIS WINDOW!")
                alert("STOP TRYING TO CLOSE THIS WINDOW!")
            }
        }
    }
    
}

function makeBetweenFunc(min, max){
    return function(num){
        retun num >= min && num <= max;
    }

}
        // function(num){
        //         retun num >= min && num <= max;
        //     }

const testRange = function (num) {
    return num >= 100 && num <= 200;
}



// makeBetweenFunc(50, 100)

function isBetween(num) {
    return num >= 50 && num <= 100
}
function isBetween2(num) {
    return num >= 1 && num <= 10
}


                        // IN CONSOLE:-

                        // makeMysteryfnc()
                        // const mystery = makeMysteryfnc()
                        // mystery()

                        // isBetween2(80)
                        // isBetween2(5)

                        // makeBetweenFunc(100, 200)

                        //     //makeBetweenFunc(0, 18)
                        // const isChild = makeBetweenFunc(0, 18)
                        // isChild
                        // isChild(40)
                        // isChild(4)
                        // const isAdult = makeBetweenFunc(19, 64)
                        // const isSenior = makeBetweenFunc(65, 120)
                        // isSenior()