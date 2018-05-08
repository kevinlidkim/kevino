import React from "react";

import TodoStore from "../todo/TodoStore";
import TodoList from "../todo/TodoList";

export default class About extends React.Component {

	render() {

		return (
			<div>
				About
				<TodoList store={TodoStore} />
			</div>
		);
	}
}