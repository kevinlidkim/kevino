import React from "react";
import ReactDOM from "react-dom";

import store from "./modules/todo/TodoStore";
import TodoList from "./modules/todo/TodoList";

const app = document.getElementById("root");

ReactDOM.render(<TodoList store={store}/>, app);
