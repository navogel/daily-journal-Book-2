console.log("hello");

let journalArray = [];

let journalEntry = {
	date: undefined,
	mood: undefined,
	concepts: undefined,
	text: undefined
};

function addEntry(item) {
	journalArray.push(item);
}

console.log(journalArray);

addEntry(journalEntry);

console.log(journalArray);
