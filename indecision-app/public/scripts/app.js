console.log("App.js is running!")

// JSX = Javascript XML : JS syntax extension
// static example below
// var template = <p>This is JSX from app.js</p>;

// Babel
// This is what the browser understands 
var template = React.createElement(
  "h1",
  {id: "someid"},
  "Something new"
);
var appRoot = document.getElementById('app');

// Render it in the browser
// Takes in two arguments
ReactDOM.render(template, appRoot);