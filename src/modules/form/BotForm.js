import React from "react";
import { observer } from "mobx-react";

import Button from "material-ui/Button";
import TextField from "material-ui/TextField";

@observer
export default class BotForm extends React.Component {

	submit(e) {
		if (e.which === 13) {
			this.sendMessage();
		}
	}

	disableEnter(e) {
		if (e.which === 13) {
			e.preventDefault();
		}
	}

	sendMessage() {
		this.props.store.sendMessage();
	}

	fillField(e) {
		this.props.store.botForm.text = e.target.value;
	}

	render() {

		const { botForm } = this.props.store;

		const form = (
			<div>
				<TextField label={botForm.label} type={botForm.type} onChange={this.fillField.bind(this)} onKeyPress={this.disableEnter.bind(this)} className="form-field"/>
			</div>
		)

		return (
			<div className="register-form" onKeyPress={this.submit.bind(this)}>
				<form>
					{form}
				</form>
				<Button variant="raised" onClick={this.sendMessage.bind(this)}>
					Submit
				</Button>
			</div>
		);
	}
}