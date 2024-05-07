import React from "react";
import ReactDOM  from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},
                [
                    React.createElement("div",{id:"child"},
                    [
                        React.createElement("h1",{},"Namaste React"),
                        React.createElement("h2",{},"H2 tag")
                    ]
                    ),
                    React.createElement("div",{id:"child2"},
                    [
                        React.createElement("h1",{},"H1 tag"),
                        React.createElement("h2",{},"H2 tag")
                    ]
                    )
                ]
            );

// const heading = React.createElement("h1",{
//     id:"header",
//     xyz:"abc"
// },"Hello World from React");
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(parent);