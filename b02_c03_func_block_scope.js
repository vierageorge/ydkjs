//IIFE
"strict mode"
var a = 3;
(function IIFE(){
    a = 2;
    console.log(a);
})()


console.log(a);