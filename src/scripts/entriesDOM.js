const journalContainer = document.querySelector("#entryLog");

function addToDom(entries) {
	entries.forEach(item => {
		journalContainer.innerHTML += myHTMLcomponent(item);
	});
}
