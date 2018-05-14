import { computed, observable } from "mobx";

class FormStore {
	@observable registerForm = {
		email: {
			value: "",
			type: "email",
			label: "Email"
		},
		password: {
			value: "",
			type: "password",
			label: "Password"
		},
		dateOfBirth: {
			value: "",
			type: "text",
			label: "Date Of Birth"
		},
		location: {
			value: "",
			type: "text",
			label: "Location"
		}
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