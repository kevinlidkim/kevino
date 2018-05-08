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
		this.props.store.registerForm[field].value = e.target.value;
	}

	render() {

		const { registerForm } = this.props.store;

		const form = Object.keys(registerForm).map(key => {
			let field = registerForm[key];
			return (
				<div>
					<TextField required label={field.label} type={field.type} onChange={this.fillField.bind(this, key)} className="form-field"/>
				</div>
			)
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