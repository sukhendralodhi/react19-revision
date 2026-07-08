# Component
- A component is just JavaScript functions that return some HTML describing what should appear on screen

```javascript

function Fn() {
    return HTML describing the UI
}

```

# What is JSX?
- JSX is a syntax extension for JavaScript that lets us write markup that looks similar to HTML, but with the full power of JavaScript behind it.

# CreateElement()
-  This CreateElement method needs at least three arguments:

1. The HTML element to be rendred (as string)
2. Any propperties/attribures for that element (or null if there are not)
3. The children of that element

```javascript

export const HelloWithoutJSX = () => {
    return React.createElement("div", { id: "container" },
        React.createElement("h1", null, "Hello sanju from without JSX component")
    )
}

```

# Rules of JSX
- JSX is not real HTML
- It's JavaScript in disguise
- Since it's not HTML, it has its own set of rules we need to follow

## Rules 1
- Every component must return a single root element
1. You can not return multiple elements sitting side by side
2. They need to be wrapped in a parent container

## Returning from functions in JavaScript
- You can not return two or more objects from a function without wrapping them array
- You can not return two or more JSX elements without wrapping them into a parent element.

## Rules 2
- Every single tag must be properly closed
1. Even the ones that do not need closing tags in HTML

## Rules 3 
- Attribute names must be written in camelCase
1. Since JSX is an extension of JavaScript, HTML attributes that conflict with JavaScript keywords need different names

## Rules 
- You can embed JavaScript expressions directly in your markup using curly braces