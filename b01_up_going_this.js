"use strict"
function foo() {
	console.log( this.bar );
}

var obj1 = {
	bar: "obj1",
	foo: foo
};


obj1.foo()