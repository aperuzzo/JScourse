//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66',
      'speechTitle': 'Their Finest Hour'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73',
      'speechTitle': 'Quit India'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42',
      'speechTitle': 'The Third Philippic'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    favoriteSpeechPrompt;

var i = 0;
while (i < speechesArray.length){
  var authorName = speechesArray[i].author;
  var title = speechesArray[i].speechTitle;
  console.log("'" + title + "'" + " is written by " + authorName);
  i++;
}

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');
  
  for (var i = 0; i < speechesArray.length; i++) {
    if (favoriteSpeechPrompt === speechesArray[i].author) {
      var favoriteAuthor = favoriteSpeechPrompt;
      var authorAge = speechesArray[i].authorAge;
      var speechTitle = speechesArray[i].speechTitle;
    }
  }
  
  if (favoriteAuthor === favoriteSpeechPrompt) {
    console.log(favoriteAuthor +" was " + authorAge + " during '" + speechTitle + "'.");
  } else {
      console.log("Did you spell the author name correctly?");
    }
  
});

var oldestYear = speechesArray[0].year;
var recentYear = speechesArray[0].year;
for(var i = 0; i < speechesArray.length; i++){
   
    if(speechesArray[i].year < recentYear){
      oldestYear = speechesArray[i].year;
    }
    if(speechesArray[i].year > oldestYear){
      recentYear = speechesArray[i].year;
    }
  }

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

  if(speechesArray[0].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }
  if(speechesArray[0].year === oldestYear){
    console.log("This is the oldest speech on the page.");
  } else if (speechesArray[0].year === recentYear){
    console.log("This is the most recent speech on the page.")
  }
  
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[1].year === oldestYear){
    console.log("This is the oldest speech on the page.");
  } else if (speechesArray[1].year === recentYear){
    console.log("This is the most recent speech on the page.")
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[2].year === oldestYear){
    console.log("This is the oldest speech on the page.");
  } else if (speechesArray[2].year === recentYear){
    console.log("This is the most recent speech on the page.")
  }
});


