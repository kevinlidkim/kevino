import React from "react";

import { Route, Switch } from 'react-router-dom'

import store from "./modules/todo/TodoStore";
import TodoList from "./modules/todo/TodoList";

import Home from "./modules/about/Home";
import About from "./modules/about/About";

export default class App extends React.Component {

	render() {

		return (<Switch>
			<Route exact path="/" component={Home}/>
			<Route path='/about' component={About}/>
		</Switch>);
	}
}