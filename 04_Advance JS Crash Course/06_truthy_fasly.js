// Falsy Values: false, 0, undefined, null, NaN, document.all
// Truthy values: all other values

if (NaN) {
  console.log("Hey");
} else {
  console.log("Hello");
}

if (document.all) {
  console.log("Hi");
} else {
  console.log("There");
}
