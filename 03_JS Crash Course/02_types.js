// primitive vs Reference
// primitive = number, string, null, undefined, boolean
// reference = [] () {}


var primitive1 = 12;
var primitive2 = primitive1;
primitive1 = primitive1 + 2;
console.log("primitive1 =", primitive1);
console.log("primitive2 =", primitive2);

var reference1 = [1, 2, 3];
var reference2 = reference1;
reference1.pop();
console.log("reference1 =", reference1);
console.log("reference2 =", reference2);