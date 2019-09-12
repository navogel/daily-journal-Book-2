//API Station

const API = {
	//fetch json data and parse
	getJournalEntries: () => {
		return fetch("http://localhost:3000/journalArray").then(response =>
			response.json()
		);
	},
	//get moods
	getMoods: () => {
		return fetch("http://localhost:3000/moods").then(response =>
			response.json()
		);
	},
	//save submitted entry to DB
	saveJournalEntry: entry => {
		fetch("http://localhost:3000/journalArray", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(entry)
		});
	},
	//delete entry
	deleteEntry: entryId => {
		return fetch(`http://localhost:3000/journalArray/${entryId}`, {
			method: "DELETE"
		});
	},
	//fetch single entry by ID
	getEntry: entryId => {
		return fetch(`http://localhost:3000/journalArray/${entryId}`).then(
			response => response.json()
		);
	},
	//edit entry

	editEntry: entryId => {
		const updatedObject = {
			date: document.querySelector("#journalDate").value,
			mood: document.querySelector("#mood").value,
			concepts: document.querySelector("#concepts").value,
			text: document.querySelector("#entry").value
		};
		fetch(`http://localhost:3000/journalArray/${entryId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(updatedObject)
		})
			.then(res => res.json())
			.then(() => {
				document.querySelector("#entryId").value = "";
			});
	}
};

export default API;
