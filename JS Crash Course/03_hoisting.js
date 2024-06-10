// Hoisting - Variabes and functions declaration are hoisted which means their declaration is moved on the top of the code.
console.log(a);
var a = 12;

/*
  What happens under the hood: - [
    var a;
    console.log(a);
    a = 12;
  ]
*/