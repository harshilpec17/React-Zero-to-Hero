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

## async vs defer attributes Javascript

When a page loads into a browser, it typically parses through synchronous JavaScript, with each code executing line by line in the call stack. Once the browser detects a script tag, it waits until the script is fully executed before loading other HTML elements. This can cause a delay in website loading time.

However, using the `async` attribute can make page loading asynchronous. When the browser encounters an `async script` tag, it allows the script to be downloaded or executed in the background without affecting other HTML elements. Although HTML rendering pauses during this time, it can lead to faster page rendering overall. Both the HTML and script are downloaded simultaneously, and once the script is fully loaded, it continues executing the page.

One drawback of this method is that if a script depends on another script, it may delay the process and cause errors.

On the other hand, using the `defer` attribute allows for faster loading of the entire HTML page before executing the script. This method does not stop the rendering of the page and prevents errors from occurring.

The main advantage of defer is that it loads the entire page, preventing errors from occurring. However, if there are multiple scripts using defer, they will all try to run after the page has loaded, which can significantly slow down page rendering.

## what is emmet ?

- Emmet is the web Development tools, which is available in VScode, sublime text, atom and many more text editor. It will make the writing process faster. Give the suggestion for code as well the shortcut notation for the syntax.
- It will help to write HTML and CSS file very easily even in the nested form. providing automatic closing tag for the small syntax.

## Difference between library and framework ?

Library is small pre written code mostly function and classes which helps to simplified or make code faster. Library can control flow of the code as well the code modification can be done. it will increase the functionality of the code

Frameworks are whole system to run the application, which has predefined APIs, compiler, toolkit. which have to use in the specific manner, mostly, you cannot modify the code of the framework. Framework has own set of control flow. It is very hard to incorporate framework in the existing project.

## what is CDN ? why do we use it ?

CDN stands for content delivery network, functionality of app or website hosted at main server, and CDN link distributed worldwide. Once user ask for the specific content, it will provide that functionality from nearest server. It will help to reduce delay the time as well lower bandwidth will require to fulfill the operation. Increasing reliability and availability of content, as the content is distributed across multiple servers
Mitigating DDoS attacks by distributing the traffic across the CDN network.

## what is crossorigin and script tag ?

The crossorigin attribute is used in HTML `<script>` tags to indicate that the script file being loaded is intended to be used across different origins, such as when loading resources from a Content Delivery Network (CDN). The attribute allows the browser to enforce the Same-Origin Policy, which is a security measure to prevent scripts from accessing resources from a different domain or origin than the one it was loaded from.

When the crossorigin attribute is present, the browser will request the script file with a CORS (Cross-Origin Resource Sharing) request header, which allows the server to determine whether the requesting origin is allowed to access the resource or not. If the server allows access, the resource will be loaded; otherwise, the browser will block the script from executing.

In summary, the crossorigin attribute is used in the `<script>` tag to specify that the script file is intended to be used across different origins, and the `<script>` tag itself is used to include JavaScript code in a web page.
