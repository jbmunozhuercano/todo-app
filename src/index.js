import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

import Todo from "./todo/Todo";

ReactDOM.render(
    <React.StrictMode>
        <Todo />
    </React.StrictMode>,
    document.getElementById("root")
);
