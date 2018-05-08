import React from "react";
import { observer } from "mobx-react";

import Button from "material-ui/Button";
import TextField from "material-ui/TextField";

@observer
export default class Form extends React.Component {

	register() {
		this.props.store.register();
	}

	fillField(field, e) {
		this.props.store[field] = e.target.value;
	}

	render() {

		const { registerForm, registerFormFields } = this.props.store;

		const form = Object.keys(registerForm).map(field => {
			let fieldType = "text";
			let fieldLabel = registerFormFields[field];

			if (field === "email") {
				fieldType = "email";
			} else if (field === "password") {
				fieldType = "password";
			}
			return (<TextField required label={fieldLabel} type={fieldType} onChange={this.fillField.bind(this, {field})} />)
		})

		return (
			<div className="register-form">
				<form>
					{form}
				</form>
				<Button variant="raised" onClick={this.register.bind(this)}>
					Submit
				</Button>
			</div>
		);
	}
}