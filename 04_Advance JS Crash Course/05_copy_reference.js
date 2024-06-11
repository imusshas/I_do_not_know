var a = [1, 2, 3, 4, 5];
var b = [...a];
b.pop();
console.log(b);
console.log(a);

var obj = { name: "Muhib" };
var copyObj = { ...obj }
copyObj.name = "Usshas"
console.log(obj);
console.log(copyObj);