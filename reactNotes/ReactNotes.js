//! npm :

// It is a package manager.
// It will download all the packages & libraries in system means we are downloading packages and then we can use them.
// Installation size will be around 500 to 600 MB.

//! npx :

// It stands for Node Package Executer.
// It will download only the necessary packages & remaining packages we can access without downloading them.
// Ex. If we want use Facebook in Mobile Phone, we have 2 ways :
// 1] Downloading Facebook App which is similar with npm way, means we are downloading & then only we are using it.
// 2] Downloading the browser(neccesary package) is similar with npx way, Here we are not downloading the Facebook App but instead we are downloading neccesary package(Browser) & executing or using Facebook App on that package.
// Installation size will be around 300 to 400 MB.

// To install : npx create react app projectname

// Project name should be in lower case only.

// Folder Structure :

// 1] node_modules
// 2] public
// 3] src
// 4] .gitignore
// 5] package-lock.json
// 6] package.json
// 7] Readme.md

// To start the App : npm start
// Default port : 3000
// We can create js & jsx file.
// We can write JSX inside both .jsx & .js file & JavaScript inside .js & .jsx both file.

//! npm create vite :

// Installation size will be around 55 to 65 MB.
// To start the App : npm run dev
// Default port : 5173
// We can create js & jsx file.
// We can write JSX inside .jsx file only & JavaScript inside .js file only.

//! Hot Module Replacement (HMR) :

// It is one of the most useful feature offered by the package bundlers in React.
// It allows all kinds of modules to be updated at runtime without the need for a full refresh.
// HMR is not intended to use in production(after development), meaning it should only be used in development.

//! Features of React :

//! 1] React follows Component Based Architecture.
// Ex. Daigram (Landing Page)

//! 2] React is Declarative in Nature.
// Everything is declared internally, we are just using it.
// Ex. We don't need to write or use any DOM methods beacause everything is declared with JSX.
// We can call React as Declarative cause it provides many in-Built Hooks for different functionalities.
// Imperative means we have to create it first & then use it.

//! 3] Write once use anywhere

// We can create components for such functionalities that are repetative & we can use such components n no. of times
// Ex. We can create Button component & use it anywhere in the application by calling it.

//! React Interview Questions :

// 1] What is React?
// 2] What are the Features, Advantage & Disadvantages of React?
// 3] Difference between Library & Framework?
// 4] What is Single Page Application?
// 5] What is Declarative?
// 6] What is Virtual DOM & how many DOM React maintain & How?
// 7] What is the difference between Virtual DOM & Real DOM?
// 8] What is Reconsillation & React Fiber & Explain the difference between them?
// 9] Explain folder-structure of React in detail?
// 10] What is the use scripts in package.json file?
// 11] What is Component? Types of Component and
// 12] What is Hooks?
// 13] What is life-cycle methods and their use. Give some examples.
// 15] What is createRoot?
// 16] What is ReactDOM and its use. What are the methods present inside it.
// 17] What is the use CDN links?
// 18] What is render?
// 19] What is useState Hook?
// 20] What is props?
// 21] Difference between props & state?
// 22] What is props Drilling?
// 23] How to avoid props drilling?
// 24] What is HOC, REDUX, Context API?

//! JavaScript Interview Questions :

// Functions -> Types (generative function)
// How this keyword work in all function?
// Differences in functions
// Object & its methods
// String & its methods
// Array & its methods
// Closures
// Destructuring
// Promises & async-await
// call, apply, bind & its difference
// Hoisting

//! Context API:

// -	Context API Is used to avoid props drilling.
// -	Here we have to create global context / store which will do two things for us
// 1.	It will store all the data that is required globally
// 2.	It will provide that data throughout the application
// -	We have to use context API in 3 steps
// 1.	Create the context component
// -	We will store and export the object that is returned by createContext() method
// export let context = createContext()

// -	We will provide the data as a value to the props.children using contextObject.Prvider

// <context.Provider value={data}>{props.children} </context.Provider>

// 2.	We want that context to be available throughout the application and for this we have to wrap App.jsx component call in between AppContext.jsx
// 3.	Use data provided by the context in any of the child component throughout the application
// -	To use data provided by the context we have to use a hook called useContext() hook will ask for an argument which should be the context object variable that is being exported from appContext
// -	Once we use useCotext hook and pass the context object argument, useContext() hook will return values provided by the appContext will store the return values and we can use it.
