

function transformDiv () {
	document.getElementById("myDiv").onclick = function() {
		if (document.getElementById("myDiv").className === "") {
		document.getElementById("myDiv").className = "transform";
		} else {
			document.getElementById("myDiv").className = "";
		}
	}
};

window.onload = function() {
	transformDiv();
}