//DOM Injector Station
import webComponent from "/src/scripts/entryComponent.js";

const injectDOM = {
	addToDom: function(entries) {
		entries.forEach(item => {
			const journalContainer = document.querySelector("#entryLog");
			journalContainer.innerHTML += webComponent.entryHTML(item);
		});
	},
	addEntToDom: function(entry) {
		const journalContainer = document.querySelector("#entryLog");
		journalContainer.innerHTML =
			webComponent.entryHTML(entry) + journalContainer.innerHTML;
	},
	RefreshDOM: function(entries) {
		const journalContainer = document.querySelector("#entryLog");
		journalContainer.innerHTML = "";
		entries.forEach(item => {
			journalContainer.innerHTML += webComponent.entryHTML(item);
		});
	}
};

export default injectDOM;
