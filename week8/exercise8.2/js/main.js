
//replaces text with new text block when user enters text in prompt
function changeText () {
	var 
		mainText = document.getElementById("mainText"),
		newText
	;
	mainText.onclick = function() {
		var userChoice = window.prompt("What do you want the text to say?");
		if(userChoice !== null){
			mainText.innerHTML = "";
			newText = document.createTextNode(userChoice);
			mainText.appendChild(newText);
		}else{
			alert("You did not enter anything!");
		}
	}
};

window.onload = function() {
	changeText();
}

