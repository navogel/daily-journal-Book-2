function showMe() {
	var x = document.getElementById("hide");
	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
	}
}

// document.querySelector(".button1").addEventListener("click", event => {
// 	let dateInput = document.querySelector("#journalDate").value;
// 	let moodInput = document.querySelector("#mood").value;
// 	let conceptsInput = document.querySelector("#concepts").value;
// 	let entryInput = document.querySelector("#entry").value;
// 	const newJournalEntry = {`date: ${dateInput}, moode: ${moodInput}, concepts: ${conceptsInput}, text: ${entryInput}`);
// });
