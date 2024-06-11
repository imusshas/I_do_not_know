/*****************      VAR     ***************/
// var was in the old JS (ES5). 
// var is function scoped.  --> var can be accessed from anywhere of it's parent function.
// var adds itself to the window object
/**********************    var scope    **************************/
function varScope() {
  for (var i = 1; i < 3; i++) {
    console.log("var i =", i);
  }

  console.log(i);
}

// console.log(i);  Error: i is not defied.
/***********************    var scope    *************************/

varScope();
/*****************      VAR     ***************/

/*****************      LET, CONST     ***************/
// let, const are in new JS(ES6).
//  let, const are braces {} scoped.
// let, const doesn't add itself to the window object.
/**********************    let const scope    **************************/
function letConstScope() {
  for (let i = 1; i < 3; i++) {
    console.log("let i =", i);
  }

  // console.log(i);  Error: i is not defied.
}
/**********************    let const scope    **************************/

letConstScope();
/*****************      LET, CONST     ***************/