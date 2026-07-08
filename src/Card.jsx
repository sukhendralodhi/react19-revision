import React from "react";

export const Card = () => {
    return (
        <div id="card">
            <h2>Welcome</h2>
            <p>
                This is a <span id="highlight">Paragraph</span>
                with text
            </p>
            <button>Click Me!</button>
        </div>
    )
}

export const CardWithoutJSX = () => {
    return React.createElement(
        "div", { id: "card" },
        React.createElement(
            "p",
            null,
            "This is a ",
            React.createElement("span", { id: "highlight" }, "paragraph"),
            " with text"
        ),
        React.createElement("button", null, "Click Me!")
    );
};