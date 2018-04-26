import React from "react";

export default class Home extends React.Component {

	render() {

		return (<div>
			Home
			<button className="foo-button mdc-button mdc-button--raised">
				<i className="material-icons mdc-button__icon" aria-hidden="true">favorite</i>
				Button
			</button>
		</div>);
	}
}