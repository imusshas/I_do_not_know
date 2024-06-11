// Execution context is a container where a function's code is executed and it is always created whenever a function is called. Is contains three thgins: variables, functions and lexical enviromnent of that function.

function abcd() {
  var a = 12;
  function def() {
    var b = 12;
  }
  // console.log(b);  // Error: b is not defined
}

abcd();

/*
  Execution Context of abcd [
  a
  def
  lexical environment
  ]
*/ 