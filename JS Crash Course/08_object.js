// Object: A collection of key-value pairs. A value can be primitive of reference or method.


var blankObject = {};       // Blank Object

var fieldObject = {
  name: "Muhib",
  age: 23,
  email: "email@example.com",
  instagram: "md.abidullahmuhib",
  contact: "017___________",
  "relationship status": "Single",
  family_info: {
    members: 3,
  },
  critificatices: ["SSC", "HSC"],
  fromMe: function () {
    console.log("Let's make this world a better place to live In Sha Allah.");
  }
};

console.log(fieldObject.name);
console.log(fieldObject["relationship status"]);
fieldObject.fromMe();

fieldObject.name = "Md. Abid Ullah Muhib"; ``
console.log(fieldObject.name);