import React from "react";
import ReactDOM from "react-dom/client";

const Heading = React.createElement("div", { className: "title" }, [
  React.createElement("h1", { id: "h1" }, "Hello from h1"),
  React.createElement("h2", { id: "h2" }, "Hello from h2"),
  React.createElement("h3", { id: "h3" }, "Hello from h3"),
]);

const HeadingComponent = () => (
  <div>
    <h1>Hello from JSX</h1>
    <h2>Hello from JSX</h2>
    <h3>Hello from Jsx</h3>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {Heading}
    <HeadingComponent />
    {HeadingComponent()}
    {<HeadingComponent></HeadingComponent>}
  </>
);
