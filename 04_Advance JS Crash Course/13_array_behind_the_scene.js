var arr = [1, 2, 3, 4, 5];

/*
  Behind The Scene
  arr {
    0: 1,
    1: 2,
    2: 3,
    3: 4,
    4: 5
  }
*/

arr[-100] = 0;
console.log(arr);
console.log("Typeof arr:", typeof arr);
console.log("Typeof {}:", typeof {});
console.log("IsArray arr:", Array.isArray(arr));
console.log("IsArray {}:", Array.isArray({}));