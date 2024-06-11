// forIn works on object.

var obj = {
  name: "Muhib",
  age: 23,
  city: "Magura"
}

for (key in obj) {
  console.log(key, ":", obj[key]);
}