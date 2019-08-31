console.log("hello");

import injectDOM from "/src/scripts/entriesDOM.js";
// import showMe from "/src/scripts/events.js";
import API from "/src/scripts/data.js";

API.getJournalEntries()
	.then(data => data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
	.then(data => injectDOM.addToDom(data));

const newJournalEntry = document
	.querySelector(".button1")
	.addEventListener("click", event => {
		let dateInput = document.querySelector("#journalDate").value;
		let moodInput = document.querySelector("#mood").value;
		let conceptsInput = document.querySelector("#concepts").value;
		let entryInput = document.querySelector("#entry").value;
		const totalEntry = {
			date: dateInput,
			mood: moodInput,
			concepts: conceptsInput,
			text: entryInput
		};
		console.log(totalEntry);
		API.saveJournalEntry(totalEntry);
		injectDOM.addEntToDom(totalEntry);
	});

document.querySelector(".reverse").addEventListener("click", event => {
	API.getJournalEntries()
		.then(data => data.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)))
		.then(data => injectDOM.RefreshDOM(data));
});

document.querySelector(".normal").addEventListener("click", event => {
	API.getJournalEntries()
		.then(data => data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
		.then(data => injectDOM.RefreshDOM(data));
});

// .then(data.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
