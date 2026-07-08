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

## props pattern
- Default props
1. the default value is only used if the props is missing or if you pass undefined
2. if you pass null or 0, the default value won't be used
3. forwarding props with spread operator

## Passing JSX as children
- In HTML you know that it is natural to nest elements inside each other 
- In React, you can do that exact same thing with components
- Layouts, Cards Modals etc

- Forwarding props using spread operator


## Rest Operator
- Purpose: Collects multiple values into one variable.
```javascript
const [first, ...others] = [10, 20, 30, 40];

console.log(first);
console.log(others);
```

## 1. Spread Operator (...)
- Purpose: Expands (spreads) elements or properties.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2);
```

# Conditional rendering
## 4 ways of conditional rendering

1. If Statement

```javascript
export const UserDetails = ({ name, isOnline, hideOffline }) => {

    if (hideOffline && !isOnline) {
        return null
    }

    if (isOnline) {
        return (
            <div>
                <h3>{name}</h3>
                <p>Online</p>
                <p>Available for chat</p>
                <button>Send Message</button>
            </div>
        )
    }

    return (
        <div>
            <h3>{name}</h3>
            <p>Status: Offile</p>
            <p>Not Available</p>
            <p>Check back later</p>
        </div>
    )
}
```

2. Ternary Operator (?:)

```javascript
 <div>
            <h3>{name}</h3>
            <p>{isOnline ? "Online" : "Offline"}</p>
            <p>{isOnline ? "Available for chat" : "Not Availble for chat"}</p>
            {
                isOnline ? (
                    <button>Send Message</button>
                ) : (
                    <p>Check back later</p>
                )
            }
            <p>Check back later</p>
        </div>
```

3. AND Operator (&&)


