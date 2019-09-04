//API Station

const API = {
	//fetch json data and parse
	getJournalEntries: () => {
		return fetch("http://localhost:3000/journalArray").then(response =>
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
	deleteEntry: entryId => {
		return fetch(`http://localhost:3000/journalArray/${entryId}`, {
			method: "DELETE"
		}).then(response => response.json());
	}
};

export default API;
