import API from "/src/scripts/data.js";

const dropdown = {
	moodDropdown: () => {
		API.getMoods().then(moods => {
			console.log(moods);
			const moodDropdown = document.querySelectorAll("#moody");
			moodDropdown.forEach(element => {
				moods.forEach(mood => {
					element.innerHTML += `<option id="type-${mood.id}" value="${mood.id}">${mood.mood}</option>`;
				});
			});
		});
	}
};

export default dropdown;
