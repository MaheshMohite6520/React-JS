let { log } = console;

//! 1] default Export :

//! In default export we have to use default keyword.
//! We can write default keyword only once.
//! If we want to export multiple variables in default way, We can wrap the variables into an object & then we will export that object.
//! When it is default export, while importing we can use any name.
//! When it is default export, while importing we sould not take curly braces ( {} )
//! When we are exporting as default, default keyword should not be on the same line of variable declaration.

// import planes from "./russia.js";

// log(planes);

//! 2] Named Export :

//! In Named export we shoud not use default keyword.
//! We can do named export mmultiple times.
//! When it is named export, while importing we shold take same exported name.
//! When it is named export, while importing we must take curly braces ( {} )
//! When we are exporting as named export, export keyword can be on the same line of variable declaration.

import { plane1, plane2 } from "./russia.js";

log(plane1);
log(plane2);

log("hello" * 3);
