//WEB component station

const webComponent = {
	entryHTML: function(item) {
		return `
            <div class="jContainer">
            <h5 class="JTopLine"><span class="date">Date: ${item.date} </span> <span class="mood"> Mood: ${item.mood} </span><h5>
            <p class="concept">${item.concepts}
            <p>${item.text}
            </div>
            `;
	}
};

export default webComponent;
