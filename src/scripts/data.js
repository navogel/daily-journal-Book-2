const API = {
	getJournalEntries: function() {
		return fetch("http://localhost:3000/journalArray").then(response =>
			response.json()
		);
	}
};
