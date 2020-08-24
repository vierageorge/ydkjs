// ========== PT 1 ==============
//  function foo(){
//    let a = 2;
//    function bar(){
//      console.log(a);
//    }
//    return bar
//  }

//  baz = foo()
//  baz()

// ========== PT 2 ==============

//  function foo() {
// 	var a = 2;

// 	function baz() {
// 		console.log( a ); // 2
// 	}

// 	bar( baz );
// }

// function bar(fn) {
// 	fn(); // look ma, I saw closure!
// }

// foo()

// ========== PT 3 ==============

// for (var i=1; i<=5; i++) {
// 	setTimeout( function timer(){
// 		console.log( i );
// 	}, i*1000 );
// }

// ========== PT 4 ==============

// for (var i=1; i<=5; i++) {
// 	(function(){
// 		setTimeout( function timer(){
// 			console.log( i );
// 		}, i*1000 );
// 	})();
// }

// ========== PT 5 ==============


// for (var i=1; i<=5; i++) {
//   (function(){
//     var j = i;
// 		setTimeout( function timer(){
//       console.log( j );
// 		}, j*1000 );
// 	})();
// }

// ========== PT 6 ==============

// for (var i=1; i<=5; i++){
//   (function(j){
//     setTimeout(function timer(){
//       console.log(j);
//     }, j*1000);
//   })(i);
// }

// ========== PT 7 ==============

// for (var i = 1; i <= 5; i++){
//   let j=i;
//   setTimeout(function timer(){
//     console.log(j);
//   }, j*1000)
// }

// ========== PT 8 ==============

// for (let i = 1; i <= 5; i++){
//   setTimeout(function timer(){
//     console.log(i);
//   }, i*1000)
// }


// ========== PT 9 MODULES ==============

// function foo() {
// 	var something = "cool";
// 	var another = [1, 2, 3];

// 	function doSomething() {
// 		console.log( something );
// 	}

// 	function doAnother() {
// 		console.log( another.join( " ! " ) );
// 	}
// }

// foo.doSomething()

// ========== PT 10 ==============

function CoolModule(){
  var something = "cool";
  var another = [1,2,3,4];

  function doSomething(){
    console.log(something);
  }

  function doAnother(){
    console.log(another.join(" ! "));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  }
}

var foo = CoolModule();
foo.doSomething();
foo.doAnother();