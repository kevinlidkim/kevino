import React from "react";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField"

export default class Home extends React.Component {

	clicky(e) {
		console.log('heyyo');
		fetch('/api')
			.then(res => res.json())
			.then(
				(result) => {
					console.log(result);
				},
				(error) => {
					console.log(error);
				}
			)
	}

	render() {

		return (
			<div className="register-form">
				<form>
					<TextField required label="Email" type="email" />
					<TextField required label="Password" type="password" />
				</form>
				<Button variant="raised" onClick={this.clicky.bind(this)}>
					Submit
				</Button>
			</div>
		);
	}
}