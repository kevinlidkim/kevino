import React from "react";
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {

	render() {

		return (
			<header className="mdc-top-app-bar--dense teal-navbar">
				<div className="mdc-top-app-bar__row">
					<section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
						<a href="#" className="material-icons mdc-top-app-bar__navigation-icon">menu</a>
						<span className="mdc-top-app-bar__title">Title</span>
					</section>
					<section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
						<Link to="/" className="material-icons mdc-top-app-bar__action-item" aria-label="Download" alt="Download">file_download</Link>
						<Link to="/about" className="material-icons mdc-top-app-bar__action-item" aria-label="Print this page" alt="Print this page">print</Link>
					</section>
				</div>
			</header>
		);
	}
}