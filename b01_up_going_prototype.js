var foo = {
    a: 42
}

var bar = Object.create(foo)
bar.b = "Hello"

console.log(bar)
console.log(bar.a)