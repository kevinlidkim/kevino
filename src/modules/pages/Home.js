import React from "react";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField"

export default class Home extends React.Component {

	render() {

		return (
			<div className="register-form">
				<form>
					<TextField required label="Email" type="email" />
					<TextField required label="Password" type="password" />
				</form>
				<Button variant="raised">
					Submit
				</Button>
			</div>
		);
	}
}