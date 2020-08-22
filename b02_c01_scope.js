function foo(a) {
    console.log(a+b)
    //This produces a Reference error.
    b=a
}
foo(2)