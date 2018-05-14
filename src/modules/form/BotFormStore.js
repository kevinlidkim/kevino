import { computed, observable } from "mobx";
import { config } from "../../../config/config";
import TodoList from "../todo/TodoList";

class BotFormStore {

	@observable botForm = {
		text: "",
		type: "text",
		label: "Message"
	}

	sendMessage() {

		if (config.gchat) {

			let body = {
				text: this.botForm.text
			}

			fetch(config.gchat, {
				method: 'post',
				body: JSON.stringify(body)
			}).then(res => res.json())
				.then(
					(result) => {
						console.log(result);
					},
					(error) => {
						console.log(error);
					}
				)

		} else {
			// gchat endpoint not defined
		}
	}

}

export default new BotFormStore;