// Array = A collection of same type of values


var arr = [11, 12, 13, 14, 15];
console.log(arr[0]);
arr.push(16);            // Add the value to the end
console.log(arr);
arr.pop();              // Remove a value from the end
console.log(arr);
arr.unshift(10);        // Add the value to the start
console.log(arr);
arr.shift();           // Remove a value from the start
console.log(arr);
arr.splice(2, 2);       // splice(start index, quantity). Remove the quantity number of values from the start index
console.log(arr);

