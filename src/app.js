import React from "react";

import { Route, Switch } from 'react-router-dom'

import store from "./modules/todo/TodoStore";
import TodoList from "./modules/todo/TodoList";

import Home from "./modules/pages/Home";
import About from "./modules/pages/About";
import Bot from "./modules/pages/Bot";
import Navbar from "./modules/navbar/Navbar";

export default class App extends React.Component {

	render() {

		return (
			<div>
				<Navbar/>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path='/about' component={About}/>
					<Route path='/bot' component={Bot}/>
				</Switch>
			</div>
		);
	}
}