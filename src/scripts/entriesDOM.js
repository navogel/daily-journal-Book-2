//DOM Injector Station
import webComponent from "/src/scripts/entryComponent.js";

const injectDOM = {
	//inject entries into the journal container
	addToDom: function(entries) {
		entries.forEach(item => {
			const journalContainer = document.querySelector("#entryLog");
			journalContainer.innerHTML += webComponent.entryHTML(item);
		});
	},
	//inject
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
	},
	filterMood: function(entry, mood) {
		const journalContainer = document.querySelector("#entryLog");
		journalContainer.innerHTML = "";
		entry.forEach(entry => {
			if (entry.mood === mood) {
				journalContainer.innerHTML += webComponent.entryHTML(entry);
			}
		});
	},
	searchEntries: function(entry, searchTerm) {
		const journalContainer = document.querySelector("#entryLog");
		journalContainer.innerHTML = "";
		entry.forEach(entry => {
			if (
				entry.text.toLowerCase().search(searchTerm.toLowerCase()) != -1 ||
				entry.concepts.toLowerCase().search(searchTerm.toLowerCase()) != -1
			) {
				entry.text = entry.text.replace(
					new RegExp(searchTerm, "gi"),
					match => `<mark>${match}</mark>`
				);

				journalContainer.innerHTML += webComponent.entryHTML(entry);
			}
		});
	}
};

export default injectDOM;
