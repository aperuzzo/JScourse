var myDiv = document.getElementById("myDiv");
var heading = document.createElement("h1");
var paragraph = document.createElement("p");


//heading.innerHTML = "This is a heading";
//paragraph.innerHTML = "This is a paragraph";
var headingText = document.createTextNode("This is a heading");
heading.appendChild(headingText);

var paragraphText = document.createTextNode("This is a paragraph");
paragraph.appendChild(paragraphText);

paragraph.setAttribute("align","center");

myDiv.appendChild(heading);
myDiv.appendChild(paragraph);