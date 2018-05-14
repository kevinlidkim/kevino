import React from "react";
import { Link } from 'react-router-dom';
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/Icon";

export default class Navbar extends React.Component {

	render() {

		return (
			<AppBar position="static" className="teal-navbar">
				<Toolbar>
					<IconButton>
						<Icon>menu</Icon>
					</IconButton>
					<IconButton href="/">
						<Icon>file_download</Icon>
					</IconButton>
					<IconButton href="/about">
						<Icon>print</Icon>
					</IconButton>
					<IconButton href="/bot">
						<Icon>face</Icon>
					</IconButton>
				</Toolbar>
			</AppBar>
		);
	}
}

