//DOM Injector Station
import webComponent from "/src/scripts/entryComponent.js";

const injectDOM = {
	//inject multiple entries into the journal container   DEPRECATED for RefreshDOM
	addToDom(entries) {
		const journalContainer = document.querySelector("#entryLog");
		journalContainer.innerHTML = "";
		entries.forEach(item => {
			journalContainer.innerHTML += webComponent.entryHTML(item);
		});
	},
	//inject an entry to the top of the journal container  DEPRECATED for RefreshDOM
	addEntToDom: function(entry) {
		const journalContainer = document.querySelector("#entryLog");
		journalContainer.innerHTML =
			webComponent.entryHTML(entry) + journalContainer.innerHTML;
	},
	//refresh all filters, wipe the journal container, insert new entries.
	RefreshDOM: function(entries) {
		const journalContainer = document.querySelector("#entryLog");
		journalContainer.innerHTML = "";
		entries.forEach(item => {
			journalContainer.innerHTML += webComponent.entryHTML(item);
		});
	},
	//filter journal entries by mood
	filterMood: function(entry, mood) {
		const journalContainer = document.querySelector("#entryLog");
		journalContainer.innerHTML = "";
		entry.forEach(entry => {
			if (entry.moodId === mood) {
				journalContainer.innerHTML += webComponent.entryHTML(entry);
			}
		});
	},
	filterMood2: function(entries, mood) {
		const journalContainer = document.querySelector("#entryLog");
		journalContainer.innerHTML = "";
		const filteredEntries = entries.filter(entry => entry.moodId === mood);
		filteredEntries.forEach(entry => {
			journalContainer.innerHTML += webComponent.entryHTML(entry);
		});
	},
	//search for entries, that match a keyword
	searchEntries: function(entry, searchTerm) {
		const journalContainer = document.querySelector("#entryLog");
		journalContainer.innerHTML = "";
		entry.forEach(entry => {
			if (
				//search in text/concepts using lowercase strings.
				entry.text.toLowerCase().search(searchTerm.toLowerCase()) != -1 ||
				entry.concepts.toLowerCase().search(searchTerm.toLowerCase()) != -1
			) {
				//replace matches in search string with highlighted text
				entry.text = entry.text.replace(
					searchTerm,
					match => `<mark>${match}</mark>`
				);

				journalContainer.innerHTML += webComponent.entryHTML(entry);
			}
		});
	}
};

export default injectDOM;
