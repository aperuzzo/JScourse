var theirFinestHour = {
	authorName: "Churchill",
	yearOfSpeech: 1940,
	yearBc: false
};

var quitIndia = {
	authorName: "Ghandi",
	yearOfSpeech: 1942,
	yearBc: false
};

var theThirdPhilippic = {
	authorName: "Demosthenes",
	yearOfSpeech: 342,
	yearBc: true
};

var speeches = ["theirFinestHour", "quitIndia", "theThirdPhilippic"];

var difference = quitIndia.yearOfSpeech - theirFinestHour.yearOfSpeech;

console.log(quitIndia.authorName + "'s speech and " + theirFinestHour.authorName + "'s speech are " + 
	difference + " years apart.");


//Button commands

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  console.log("There are " + speeches.length + " speeches on the page.");
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log("This speech was written by " + theirFinestHour.authorName + " in " +
  	theirFinestHour.yearOfSpeech + ". It is " + theirFinestHour.yearBc + 
  	" that this year is B.C.E.");
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log("This speech was written by " + quitIndia.authorName + " in " +
  	quitIndia.yearOfSpeech + ". It is " + quitIndia.yearBc + 
  	" that this year is B.C.E.");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log("This speech was written by " + theThirdPhilippic.authorName + " in " +
  	theThirdPhilippic.yearOfSpeech + ". It is " + theThirdPhilippic.yearBc + 
  	" that this year is B.C.E.");
});


