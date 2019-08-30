console.log("hello");

//array with one entry

// let journalArray = [
// 	{
// 		date: "07/24/2018",
// 		mood: "ni  &#129324;",
// 		concepts: "Shubbery",
// 		text:
// 			"uploaded some stuff to the DOM, smitches, uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches"
// 	},
// 	{
// 		date: "08/24/2038",
// 		mood: "ni &#128528",
// 		concepts: "Roger the Shrubber",
// 		text:
// 			"uploaded some stuff to the DOM, smitches, uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches"
// 	},
// 	{
// 		date: "09/24/2218",
// 		mood: "ni &#128516;",
// 		concepts: "No one expects a Spannish Shrubbery",
// 		text:
// 			"uploaded some stuff to the DOM, smitches, uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches"
// 	},
// 	{
// 		date: "19/24/2018",
// 		mood: "ni &#128516;",
// 		concepts: "Nice tiered effect",
// 		text:
// 			"uploaded some stuff to the DOM, smitches, uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches"
// 	},
// 	{
// 		date: "37/24/2418",
// 		mood: "ni &#128528",
// 		concepts: "Sir Robin",
// 		text:
// 			"uploaded some stuff to the DOM, smitches, uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches"
// 	},
// 	{
// 		date: "77/24/2099",
// 		mood: "ni  &#129324;",
// 		concepts: "Holy Grail",
// 		text:
// 			"uploaded some stuff to the DOM, smitches, uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches"
// 	}
// ];

// //object to add to array

// let journalEntry = {
// 	date: "10/12/1981",
// 	mood: "ni &#128516;",
// 	concepts: "Mor dom",
// 	text:
// 		"uploaded some MORE stuff to the DOM, smitches, uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches,uploaded some stuff to the DOM, smitches"
// };

//function that adds object to array

// function addEntry(item) {
// 	journalArray.push(item);
// }

// console.log(journalArray);

// //calling add to array function

// addEntry(journalEntry);

// console.log(journalArray);

//linking the empty entrylog div to the js container

console.log(journalContainer);

//put journal entries from array into the DOM

//function to show/hide journal entries

/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
API.getJournalEntries().then(data => addToDom(data));

document.querySelector(".button1").addEventListener("click", event => {
	let dateInput = document.querySelector("#journalDate").value;
	let moodInput = document.querySelector("#mood").value;
	let conceptsInput = document.querySelector("#concepts").value;
	let entryInput = document.querySelector("#entry").value;
	console.log(dateInput, moodInput, conceptsInput, entryInput);
});
