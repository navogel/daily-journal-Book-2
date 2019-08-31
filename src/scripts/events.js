function showMe() {
	var x = document.getElementById("hide");
	if (x.style.display === "flex") {
		x.style.display = "none";
	} else {
		x.style.display = "flex";
	}
}

function getLarge() {
	var x = document.getElementById("height");
	x.style.transform = "scale(1.5)";
	x.style.transition = ".5s";
	x.style.backgroundColor = "#f38f00";
	x.style.borderRadius = "7px";
	x.style.color = "white";
}

function getSmall() {
	var x = document.getElementById("height");
	x.style.transform = "scale(1)";
	x.style.transition = ".5s";
	x.style.backgroundColor = "white";
	x.style.borderRadius = "10px";
	x.style.color = "rgb(106, 133, 190)";
}

function clearContents(element) {
	element.value = "";
}
