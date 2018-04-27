import React from "react";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField"

export default class Home extends React.Component {

	render() {

		return (
			<div className="register-form">
				<div className="input-field">
					<TextField type="text" />
				</div>
				<Button variant="raised">
					Hello world
				</Button>
			</div>
		);
	}
}