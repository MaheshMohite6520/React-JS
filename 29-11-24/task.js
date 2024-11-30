let { log } = console;

//! 1. Create a Named Export

// Create a module file called mathUtils.js with a named export function add(a, b). Import it into another file and use it to add two numbers.

// import { add } from "./mathUtils.js";

// log(add(10, 20));

//! 2. Create Multiple Named Exports

// Create a module file called stringUtils.js that exports two named functions: toUpperCase(str) and toLowerCase(str). Import and use them in a separate file.

// import { toLowerCase, toUpperCase } from "./stringUtils.js";

// log(toLowerCase("MAHESH"));
// log(toUpperCase("mahesh"));

//! 3. Default Export: Greeting

// Create a module file greet.js with a default export function greet(name). Import it and display a greeting message for the user.

// import hello from "./greet.js";

// hello("Mahesh");

//! 4. Import All Named Exports

// Create a module file colors.js with named exports: red, green, and blue. Import all these exports using import * as colors and log them.

// import { color1, color2, color3 } from "./colors.js";

// log(color1);
// log(color2);
// log(color3);

//! 5. Combining Named and Default Exports

// Create a file shapes.js:

// Export two named constants: circle and square.

// Default export a function drawShape(shape). Import them and use them in another file.

// import drawShape, { circle, square } from "./shapes.js";

// log(circle);
// log(square);

// drawShape(circle);
// drawShape(square);

//! 6. Re-exporting Modules

// Create two modules:

// math.js: Exports add and subtract functions.

// operations.js: Imports add and subtract from math.js and re-exports them.
// Use operations.js in the main file to perform calculations.

// import { add, subtract } from "./operations.js";

// log(add(10, 20));
// log(subtract(100, 20));

// 7. Rename Exports

// Create a module file dateUtils.js with two named exports: getToday() and getTomorrow(). Import them with different names in another file and use them.

// import { getToday, getTommorrow } from "./dateUtils.js";

// getToday();
// getTommorrow();

//! 8. Import Default with Named Exports

// Create a file api.js:

// Default export a function fetchData(url).

// Named export a function postData(url, data).
// Import both in a separate file and use them.

// import fetchData, { postData } from "./api.js";

// let data = fetchData("https://api.example.com/data");
// log(data);

// let postResponse = postData("https://api.example.com/post", { key: "value" });
// console.log(postResponse);

//! 9. Use Dynamic Imports

// Create a module dynamic.js with a default export function sayHello(). Use import() to dynamically import and call this function.

//! 10. Export an Object

// Create a file config.js that exports an object with keys like apiUrl, timeout, and debug. Import and use the object in a separate file.

// import obj from "./config.js";

// log(obj.apiUrl);
// log(obj.timeout);
// log(obj.debug);

//! 11. Export an Array

// Create a file fruits.js that exports an array of fruits. Import it in another file and use the forEach method to log each fruit.

// import fruits from "./fruits.js";

// fruits.forEach((fruit) => {
//   log(fruit);
// });

//! 12. Use Import Aliases

// Create a module numbers.js with two named exports: PI and E. Import them with aliases piValue and eValue.

// import { PI as piValue, E as eValue } from "./numbers.js";

// log(piValue, eValue);

//! 13. Conditional Exports

// Create a file mode.js with named exports lightMode and darkMode. Export them conditionally based on a variable isDarkMode.

// import { isDarkMode } from "./mode.js";

// isDarkMode;

//! 14. Cross-Module Import

// Create two modules:

// moduleA.js: Export a function functionA().

// moduleB.js: Import functionA from moduleA and call it.

//! 15. Export a Class

// Create a file Person.js that exports a Person class as default. Import and use it to create objects of this class.

// import Person from "./Person.js";

// let obj = new Person();
// log(obj);

//! 16. Default Export with Fallback

// Create a file utility.js with a default export function processData(data). If data is null, throw an error. Test it with valid and invalid inputs.

// import processData from "./utility.js";

// processData("Hello");
// processData();

//! 17. Export Multiple Functions

// Create a file mathOperations.js with named exports for add, subtract, multiply, and divide. Import only add and divide in another file and use them.

// import { add, division } from "./mathOperations.js";

// console.log(add(10, 20));
// console.log(division(100, 5));

//! 18. Nested Imports

// Create two files:

// helpers.js: Export functions sayHi and sayBye.

// greetings.js: Import sayHi from helpers.js and export it as hello.
// Use greetings.js in the main file.

// import { hello } from "./greetings.js";

// hello();

//! 19. Circular Dependency

// Create two files:

// file1.js: Export a function function1 that calls a function imported from file2.js.

// file2.js: Export a function function2 that calls a function imported from file1.js.
// Test how circular dependencies work in JavaScript.

// import { function1 } from "./file1.js";
// import { function2 } from "./file2.js";

// function1();
// function2();

//! 20. Default Export Rename

// Create a module calculator.js with a default export function calculate(expression). Import and rename it to evaluateExpression in another file and use it.

import evaluateExpression from "./calculator.js";

let sum = 10 + 20;

let result = evaluateExpression(sum);
console.log(result);
