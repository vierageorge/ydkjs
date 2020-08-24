 function foo(){
   let a = 2;
   function bar(){
     console.log(a);
   }
   return bar
 }

 baz = foo()
 baz()