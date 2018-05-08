import React from "react";

import FormStore from "../form/FormStore";
import Form from "../form/Form";

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
			<div>
				Home
				<Form store={FormStore} />
			</div>
		);
	}
}