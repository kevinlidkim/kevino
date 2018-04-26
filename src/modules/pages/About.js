import React from "react";

import store from "../todo/TodoStore";
import TodoList from "../todo/TodoList";

export default class About extends React.Component {

	render() {

		return (<div>
			About
			<TodoList store={store}/>
		</div>);
	}
}