import { computed, observable } from "mobx";

class FormStore {
	@observable registerForm = {
		email: "",
		password: "",
		date_of_birth: "",
		location: ""
	}

	@computed get registerFormFields() {
		var labels = {};
		Object.keys(this.registerForm).map(field => {
			let fieldLabel = this.parseFieldLabel(field);
			labels[field] = fieldLabel;
		})
		return labels;
	}

	parseFieldLabel(field) {
		let label = "";
		let parts = field.split('_');
		parts.map(word => {
			label = label + word.charAt(0).toUpperCase() + word.slice(1) + " ";
		})
		return label.trim();
	}

	register() {
		console.log('register');
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

}

export default new FormStore;