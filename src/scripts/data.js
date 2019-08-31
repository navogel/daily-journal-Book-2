//API Station

const API = {
	getJournalEntries: function() {
		return fetch("http://localhost:3000/journalArray").then(response =>
			response.json()
		);
	},
	saveJournalEntry: function(entry) {
		fetch("http://localhost:3000/journalArray", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(entry)
		});
	}
};

export default API;
