console.log("hello");

//array with one entry

let journalArray = [
	{
		date: "07/24/2018",
		mood: "ni  &#129324;",
		concepts: "Shubbery",
		text:
			"uploaded some stuff to the DOM, smitches, uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches"
	},
	{
		date: "08/24/2038",
		mood: "ni &#128528",
		concepts: "Roger the Shrubber",
		text:
			"uploaded some stuff to the DOM, smitches, uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches"
	},
	{
		date: "09/24/2218",
		mood: "ni &#128516;",
		concepts: "No one expects a Spannish Shrubbery",
		text:
			"uploaded some stuff to the DOM, smitches, uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches"
	},
	{
		date: "19/24/2018",
		mood: "ni &#128516;",
		concepts: "Nice tiered effect",
		text:
			"uploaded some stuff to the DOM, smitches, uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches"
	},
	{
		date: "37/24/2418",
		mood: "ni &#128528",
		concepts: "Sir Robin",
		text:
			"uploaded some stuff to the DOM, smitches, uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches"
	},
	{
		date: "77/24/2099",
		mood: "ni  &#129324;",
		concepts: "Holy Grail",
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
		
		<h5 class="JTopLine"><span class="date">Date: ${item.date} </span> <span class="mood"> Mood: ${item.mood} </span><h5>
		
		<p class="concept">${item.concepts}
		
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
