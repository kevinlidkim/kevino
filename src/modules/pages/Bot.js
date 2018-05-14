import React from "react";

import BotFormStore from "../form/BotFormStore";
import BotForm from "../form/BotForm";

export default class Bot extends React.Component {

	render() {

		return (
			<div>
				Bot
				<BotForm store={BotFormStore} />
			</div>
		);
	}
}