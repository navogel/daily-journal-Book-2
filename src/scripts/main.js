//say hi

console.log("hello");

import injectDOM from "/src/scripts/entriesDOM.js";
import API from "/src/scripts/data.js";

//not working for some reason?
// import showMe from "/src/scripts/events.js";

//Get journal entries

API.getJournalEntries()
	//sort entries
	.then(data => data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
	//take data and add to DOM
	.then(data => injectDOM.addToDom(data));

//create new journal entry and add to the DOM
const newJournalEntry = document
	//add event listener for button
	.querySelector(".button1")
	.addEventListener("click", event => {
		//declare variables to form value - REFACTOR
		let dateInput = document.querySelector("#journalDate").value;
		let moodInput = document.querySelector("#mood").value;
		let conceptsInput = document.querySelector("#concepts").value;
		let entryInput = document.querySelector("#entry").value;
		//check if the fields are empty
		if (entryInput === "") {
			window.alert("FILL OUT THE FORM");
		} else if (moodInput === "") {
			window.alert("YOU NEED TO PICK A MOOD");
		} else if (conceptsInput === "") {
			window.alert("WHAT ABOUT THE CONCEPTS???");
		} else if (dateInput === "") {
			window.alert("YEAH YOU NEED A DATE TOO");
		} else {
			//create object
			const totalEntry = {
				date: dateInput,
				mood: moodInput,
				concepts: conceptsInput,
				text: entryInput
			};
			console.log(totalEntry);
			//save to DB
			API.saveJournalEntry(totalEntry);
			//inject at the top of the journal entry container
			injectDOM.addEntToDom(totalEntry);
			//clear text input fields REFACTER to while loop using object
			document.getElementById("journalDate").value = "";
			document.getElementById("mood").value = "";
			document.getElementById("concepts").value = "";
			document.getElementById("entry").value = "";
			//open modal validating submission - declare vars REFACTOR with ERROR?
			let modal = document.getElementById("myModal");
			let span = document.getElementsByClassName("close")[0];
			modal.style.display = "block";
			//click on close button or anywhere on the window to close modal
			span.onclick = () => {
				modal.style.display = "none";
			};
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			};
		}
	});

//sorting oldest first by ID
document.querySelector(".reverse").addEventListener("click", event => {
	API.getJournalEntries()
		.then(data => data.sort((a, b) => parseFloat(a.id) - parseFloat(b.id)))
		.then(data => injectDOM.RefreshDOM(data));
});

//sorting by newest entries first
document.querySelector(".normal").addEventListener("click", event => {
	API.getJournalEntries()
		.then(data => data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
		.then(data => injectDOM.RefreshDOM(data));
});

//reset any filters
document.querySelector(".resetFilter").addEventListener("click", event => {
	API.getJournalEntries()
		.then(data => data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
		.then(data => injectDOM.RefreshDOM(data));
});

//filter by mood
document.querySelector("#moodSelector").addEventListener("input", event => {
	API.getJournalEntries()
		.then(data => data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
		.then(data =>
			injectDOM.filterMood(data, document.querySelector("#moodSelector").value)
		);
});

//search entries and post results

document
	.querySelector("#searchEntries")
	.addEventListener("keypress", function(e) {
		if (e.key === "Enter") {
			API.getJournalEntries()
				.then(data => data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
				.then(data =>
					injectDOM.searchEntries(
						data,
						document.querySelector("#searchEntries").value
					)
				);
		}
	});

//delete posts

document.querySelector(".hide").addEventListener("click", event => {
	if (event.target.id.startsWith("deleteRecipe--")) {
		const entryToDelete = event.target.id.split("--")[1];
		API.deleteEntry(entryToDelete);
		API.getJournalEntries()
			.then(data => data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
			.then(data => injectDOM.RefreshDOM(data));
	}
});

//modify posts
