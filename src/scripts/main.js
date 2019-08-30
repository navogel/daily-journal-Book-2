console.log("hello");

//array with one entry

let journalArray = [
	{
		date: "07/24/2018",
		mood: "ni &#128516;",
		concepts: "DOM Stuffs",
		text:
			"uploaded some stuff to the DOM, smitches, uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches"
	}
];

//object to add to array

let journalEntry = {
	date: "10/12/1981",
	mood: "ni &#128516;",
	concepts: "Mor dom",
	text:
		"uploaded some MORE stuff to the DOM, smitches, uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches"
};

//function that adds object to array

function addEntry(item) {
	journalArray.push(item);
}

console.log(journalArray);

//calling add to array function

addEntry(journalEntry);

console.log(journalArray);

//linking the empty entrylog div to the js container

const journalContainer = document.querySelector("#entryLog");

console.log(journalContainer);

//put journal entries from array into the DOM

journalArray.forEach(item => {
	let Jcontent = `
	<div class="jContainer">
		<h5 class="JTopLine">Date: ${item.date}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Mood: ${item.mood}<h5>
		<hr>
		<p>${item.concepts}
		<hr>
		<p>${item.text}
	<div>
	
	`;
	journalContainer.innerHTML += Jcontent;
});

function showMe() {
	var x = document.getElementById("entryLog");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}
