const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello from h1 tag"),
    React.createElement("h2", {}, "Hello from h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello from h1 tag"),
    React.createElement("h2", {}, "Hello from h2 tag"),
  ]),
]);
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React"
// ); // heading is an object(React element)
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("below")); // here root is object and render is method to be used
console.log(typeof root);
root.render(parent);
