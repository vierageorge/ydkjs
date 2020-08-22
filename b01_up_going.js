function test_strict(){
    "use strict"
    a = 1
    console.log(a)
}

// test_strict()

function ternary_op(){
    var a = 41
    b = (a > 41) ? "Hello" : "World"
    console.log(b)
}
//ternary_op()


/* TESTING CLOSURE */ 

function makeAdder(x){
    var add = function(y){
        return y+x
    }
    return add
}

plusOne = makeAdder(1)
console.log(plusOne(2))
console.log(plusOne(41))