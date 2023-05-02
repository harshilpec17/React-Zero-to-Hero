## Create Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title)

```Javascript
const Heading = React.createElement("div", { className: "title" }, [
  React.createElement("h1", { id: "h1" }, "Hello from h1"),
  React.createElement("h2", { id: "h2" }, "Hello from h2"),
  React.createElement("h3", { id: "h3" }, "Hello from h3"),
]);
```

## Create same element using JSX and pass attribute into it

```Javascript
const HeadingComponent = (
  <div className="title">
    <h1 style={{ color: "red" }}>Hello from JSX</h1>
    <h2 style={({ fontSize: "40px" }, { color: "blue" })}>Hello from JSX</h2>
    <h3 style={{ fontStyle: "italic" }}>Hello from Jsx</h3>
  </div>
);
```

## Create same element using functional component in JSX and pass attribute into it.

```Javascript
const HeadingComponent = () => (
  <div className="title">
    <h1 style={{ color: "red" }}>Hello from JSX</h1>
    <h2 style={({ fontSize: "40px" }, { color: "blue" })}>Hello from JSX</h2>
    <h3 style={{ fontStyle: "italic" }}>Hello from Jsx</h3>
  </div>
);
```

## make composition inside component ( Add component inside another)

```Javascript
const ExtraComponent = () => (<h1>Extra component</h1>)
const HeadingComponent = () => (
  <div className="title">
    <h1 style={{ color: "red" }}>Hello from JSX</h1>
    <h2 style={({ fontSize: "40px" }, { color: "blue" })}>Hello from JSX</h2>
    <ExtraComponent />
    <h3 style={{ fontStyle: "italic" }}>Hello from Jsx</h3>
  </div>
);
```

## `{TitleComponent}` vs `{TitleComponent()}` vs `{TitleComponent}{/TitleComponent}` in JSX

```Javascript
const HeadingComponent = () => (
  <div className="title">
    <h1 style={{ color: "red" }}>Hello from JSX</h1>
    <h2 style={({ fontSize: "40px" }, { color: "blue" })}>Hello from JSX</h2>
    <h3 style={{ fontStyle: "italic" }}>Hello from Jsx</h3>
  </div>
);

// All will work same

root.render(
  <>
    {HeadingComponent}
    <HeadingComponent />
    {HeadingComponent()}
    {<HeadingComponent></HeadingComponent>}
  </>
);
```
