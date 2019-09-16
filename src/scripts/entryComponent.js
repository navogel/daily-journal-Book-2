//WEB component station

const webComponent = {
	entryHTML: function(item) {
		return `
            <div class="jContainer">
            <h5 class="JTopLine"><span class="date">Date: ${item.date} </span> <span class="mood"> Mood: ${item.mood} </span><h5>
            <p class="concept">${item.concepts} </p>
            <p class="entryText"> ${item.text} </p>
            <button class="deleteBtn" id="deleteEntry--${item.id}">delete me</button>
            <button class="editBtn" id="editEntry--${item.id}">edit me</button>
            </div>
            `;
	},
	editModal: function() {
		return `
            <div class="modal-content">
					<span class="close2">&times;</span>
					<form id="formBody" action="">
						<div class="formBody">
							<div class="formTop">
								<input
									type="date"
									placeholder="journalDate"
									id="eJournalDate"
								/>
								<select id="eMood">
									<optgroup id="moody">
										<option disabled selected value="">Mood</option>
									</optgroup>
								</select>
							</div>
							<div class="formConcepts">
								<input
									type="text"
									placeholder=" Concepts Covered"
									id="eConcepts"
								/>
							</div>
							<div class="formEntry">
								<textarea
									name="journalEntry"
									id="eEntry"
									rows="3"
									placeholder=" Enter all the things"
								></textarea>
							</div>

							<div class="formBottom">
								<a class="editEntryBtn">
									<span class="align">edit</span>
									<span class="add-label">Ni</span>
								</a>
							</div>
						</div>
						<input type="hidden" id="entryId" value="" />
					</form>
				</div>
            `;
	}
};

export default webComponent;
