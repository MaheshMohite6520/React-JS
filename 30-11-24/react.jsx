//! <---------------- Folder Structure --------------------->

//! 1] node_modules folder :

// It is the folder that holds the all required packages that we have installed during react app installation.
// This packages are required to run React application.
// Ex: @babal, @eslint, @rollup, @vitejs , react, react-dom
// We don't have to make any changes in this folder.


//! 2] public folder :

// It is used to store static assests like image, audio, & video.
// It is similar to the asset folder.
// We will not use public folder to store the assetd instead of that we will prefer asset folder present inside src folder.

//! 3] .gitignore :

// It is used when we are pushing the code to github at that time the files that needs to ignore or don't to push on github.
// We can make changes in this file.

//! 4] eslint.config.js :

// It acts as compiler & check the syntax error in code and stops the execution of the application.
// To write strictly typed code in react.

//! 5] index.html :

// We will have only one HTML file.
// We don't have to make any changes in this file.

/* <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
</body> */

//! 6] package-lock.json :

// It contains all the information related to packages in JSON format.
// We don't need to make any changes in this file.
// All the packages that we have installed are not in the form of javascript. So to use those packages in JS, this package contains the packages in JSON format 

//! 7] package.json :

// It contains the information related to limited packages (most used) in JSON format.
// We don't need to make any changes in this file.

//! 8] vite.config.js :

// It contains all information related to vitejs.
// We don't have to make any changes in this file.

//! 9] README.md :

// We can write all the information or description related to project.
// Also we can write instructions.

//! <--------- Package Bundler -------------> :

// 1] rollup :

// It is used to bundle the request of similar type in a single bundle & send it to the server.
// It is used to imperove the performance of the system.

//! <------------------------ package.json ----------------------->

//! 1] "version": "1.0.0" :

// It is divided into 3 parts: " Major updates . Monor Updates . Patch "

//! 2] scripts :

// It is nothing but the commands.

//! 3] devDependencies : (Development Dependencies)

// The devDependencies are those libraries or packages that are neccessary during developing the software only & are not required after deployment.
// Ex. @eslint

//! 4] dependencies :

// These are major dependencies.
// The dependencies are those libraries or packages that are neccessary during developing the software as well as  production phase.
// Ex. react & react-dom