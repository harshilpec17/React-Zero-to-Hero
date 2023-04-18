# React - Introduction and Faqs

- React is a JavaScript library written by Facebook engineers that helps build single-page applications. But what exactly is a single-page application? In the past, when we clicked on a button or link, the whole page would load, which took a long time and required a lot of bandwidth.

- With the introduction of React, clicking a button or link now only loads that specific component, leaving all other information on the page unchanged. For example, on Instagram and Facebook, videos will play, but other information on the page will remain the same as before.

## Why React known as React ?

- In 2011, when React was first launched internally by Facebook, it was known as "FaxJS" (meaning "Facebook + Javascript"). However, because React is focused on quickly responding to changes in the user interface and operates on the core principle of reactive programming, it was later renamed to "React".

## What is difference between React and ReactDOM ?

- React is a library that provides the core functionality for building user interfaces, such as managing component state, handling user events, and updating data in components.

- On the other hand, ReactDOM is a library that provides the methods and APIs for rendering React components. It serves as the glue between the actual DOM and React's virtual DOM, and is responsible for creating and updating the information on the actual DOM.

## what is difference between react.production.js and react.development.js ?

- The `react.production.js` library is intended for use in a production-ready environment, and is designed to block detailed error messages, specific warnings, checks, and tools. This library is optimized for performance and should be used when deploying your application to a live environment.

- On the other hand, the `react.development.js` library is intended for use during the development phase of your application. It includes additional error messages and specific warnings that can help you build a bug-free application. This library is not recommended for use in a production environment, but it provides helpful feedback during the debugging process.
