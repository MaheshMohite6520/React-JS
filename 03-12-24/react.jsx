//! npm :

// npm stands for Node Package Manager.
// It is a Package Installer & Registry.
// It is the world's largest Registry.
// It is the collection of around 2.1 million packages.
// At a time we can install multiple packages also.
// Ex. npm install react react-dom

//! Package Installers :

// npm, yarn, bun, pnpm, spm, cnpm, chocolatey

//! How to install particular version :

// npm create vite@latest
// npm create vite@version

//! <-----------------  main.jsx  ----------------------->

//! strict mode :

// we are importing StrictMode from react library.
// It is used to check the syntax strictly.
// Beacause of this we will get output 2 times in console.

//! 1] createRoot :

// It is a method which is used to create root element.
// We are importing from react-dom/client library.
// It will take document.getElementById("root") as an argument.
// root id is present inside index.html

//! 2] render :

// It is similar to the append().
// It is used to add the all componenets to a single div present inside index.html
// At the time of rendering Transpillation happens.
// In main.jsx rendering will happen.

//! Component :

// It is nothing but an function which returns HTML elements.
// We have to follow Pascal case naming conventions while writing the components.
// Component will return JSX as well as simple text.

//! index.css :

// It is a global file.
// It will be applied to all the files present inside react application.

//! WorkFlow :

// All the files will be appended into App.jsx
// App.jsx is called inside main.jsx by using angular braces.
// So if we import index.css into main.jsx then the css will be applied to main.jsx as well as its child componenets also.
// To use any componenet inside the file we have to import it first & then we can use it.

//! Note : This is how componenet based Architecture will work.


//! JSX Expression :

// To write JavaScript inside JSX file, we have to write inside a componenet and outside the return statement.
// We can write ouside the component also but it is not recommended to write inside the component.
// We need to write only import statements outside the componenet.