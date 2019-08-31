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
		if (entryInput === "") {
			window.alert("FILL OUT THE FORM");
		} else if (moodInput === "") {
			window.alert("YOU NEED TO PICK A MOOD");
		} else if (conceptsInput === "") {
			window.alert("WHAT ABOUT THE CONCEPTS???");
		} else if (dateInput === "") {
			window.alert("YEAH YOU NEED A DATE TOO");
		} else {
			const totalEntry = {
				date: dateInput,
				mood: moodInput,
				concepts: conceptsInput,
				text: entryInput
			};
			console.log(totalEntry);
			API.saveJournalEntry(totalEntry);
			injectDOM.addEntToDom(totalEntry);
			document.getElementById("journalDate").value = "";
			document.getElementById("mood").value = "";
			document.getElementById("concepts").value = "";
			document.getElementById("entry").value = "";

			var modal = document.getElementById("myModal");
			var btn = document.getElementById("myBtn");
			var span = document.getElementsByClassName("close")[0];
			modal.style.display = "block";
			span.onclick = function() {
				modal.style.display = "none";
			};
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			};
		}
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

document.querySelector(".resetFilter").addEventListener("click", event => {
	API.getJournalEntries()
		.then(data => data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
		.then(data => injectDOM.RefreshDOM(data));
});

document.querySelector("#moodSelector").addEventListener("input", event => {
	API.getJournalEntries()
		.then(data => data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
		.then(data =>
			injectDOM.filterMood(data, document.querySelector("#moodSelector").value)
		);
});

// .then(data.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

// function listQ() {
// 	changedText.textContent = this.value;
// }
// /* $("#list").on("change",listQ); */
// document.getElementById("list").onchange = listQ;
