## Boierplate Code

The part of code without which we can't move ahead.

## Tag

<> = tag

## Margin

Space between two elements.

## Padding

Space inside the element.

## Word

Words that don't have any special meaning to the javascirpt interpreter.

## Keyword

Words that have any special meaning to the javascirpt interpreter.

## Hoisting

Variabes and functions are hoisted which means their declaration is moved on the top of the code.

## Undefined vs Not-defined

Undefined: Something exists but it's value is not known.
Not-defined: Something that doesn't exist.

console.log(b); <!-- Error: b is not defined. -->
console.log(a); <!-- undefined -->
var a = 89;

## Premitive vs Reference

Premitive: Copies the real value not the reference/memory address.
Reference: Copies the refernce/memory address.

## Function

1. When you don't want to execute your code now. Rather you want to execute your code in future.
2. When you want to reuse your code.
3. When you want to run your code with different data.

## Parameter vs Argument

function abcd(a) {

}

abcd(12);

<!-- a: parameter -->
<!-- 12: argument -->

## Difference between var & let,const

var exists in the previous version (ES5).
var is function scoped.
var adds itself to the window object.

let, const exists in the new version (ES6). var doesn't exist in ES6.
let, const is braces scoped.
let, const doesn't add itself to the window object.

## Window

Window is an object that the browser provides to the JS language so that JS can use the features of the browser. Window object doesn't exist in JS language.
Window can also be considered as a box of browser features.

## Browser Context API

The three tools that browser provides to the JS:

1. Window object
2. Stack
3. Heap Memory

## Stack

Stack is a container that works on LIFO(Last In First Out) algorithm.

## Heap Memory

The place where all the data of a program are stored.
1+2+3+4
How comuter calculates this:
1+2 = 3 (Stores in the heap [0x1000])
3+3 = 6 (Stores in the heap [0x1000])
6+4 = 10 (Stores in the heap [0x1000])

## Execution Context

Execution context is a container where a function's code is executed whenever the function is called. It contains three things: variables of the function, functions inside that function and the functions lexical environment.

## Lexical Environment

Lexical environment is a list where the things are stored that a particular function can access. It contains it's scope and scope chain.

## Trhuthy vs Falsy

Falsy values: 0, false, undedined, null, NaN, document.all
Truthy values: all other values

## Callback

A function that tells JS that some work has been completed.

## First Class Function

Treating a fuction as a value (object).
<br>
Storing a function inside a variable.
<br>
Passing a function inside a function.

## Working of array behind the scene

Behind the scene in JS arrays are created as object.
<br>
a = [100, 200, 300, 400];
<br>
Behind the scene what happens is:  
<br>
a = {
<br>
0: 100,
<br>
1: 200,
<br>
2: 300,
<br>
3: 400
<br>
}
<br>

a[-50] = 0; // This is correct.
