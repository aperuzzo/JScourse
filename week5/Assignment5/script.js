//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

var userName = window.prompt("What is your name?");

if(userName !== "" && userName !== null){
    console.log("Hi " + userName + "!");
}
else {
  console.log("Okay, I'll just call you User");
  var userName = "User";
}

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var favoriteAuthor = window.prompt( userName + ' what is your favorite author? Please enter Churchill, Ghandi, or Demosthenes.');

  switch(favoriteAuthor) {
    case 'Churchill' :
      console.log(churchillSpeech.author + ' was ' + churchillSpeech.authorAge + ' during this speech.');
    break;

    case 'Ghandi' :
      console.log(ghandiSpeech.author + ' was ' + ghandiSpeech.authorAge + ' during this speech.');
    break;

    case 'Demosthenes' :
      console.log(demosthenesSpeech.author + ' was ' + demosthenesSpeech.authorAge + ' during this speech.');
    break;

    default:
      console.log("You did not enter a correct author!");
      
  }

});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log('This speech was written by ' + churchillSpeech.author + ' in ' + churchillSpeech.year + '.');
  
  if (churchillSpeech.yearIsBCE === true) {
    console.log('This speech took place before the common era.');
  } else {
    console.log('This speech took place during the common era.');
  }

  if (churchillSpeech.year < ghandiSpeech.year && churchillSpeech.year < demosthenesSpeech.year) {
    console.log("This is the oldest speech on the page.");
  } else if (churchillSpeech.year > ghandiSpeech.year && churchillSpeech.year > demosthenesSpeech.year) {
    console.log("This is the most recent speech on the page.");
  }
  
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + ghandiSpeech.author + ' in ' + ghandiSpeech.year + '.');
  if (ghandiSpeech.yearIsBCE === true) {
    console.log('This speech took place before the common era.');
  } else {
    console.log('This speech took place during the common era.');
  }

  if (ghandiSpeech.year < churchillSpeech.year && ghandiSpeech.year < demosthenesSpeech.year) {
    console.log("This is the oldest speech on the page.");
  } else if (ghandiSpeech.year > churchillSpeech.year && ghandiSpeech.year > demosthenesSpeech.year) {
    console.log("This is the most recent speech on the page.");
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + demosthenesSpeech.author + ' in ' + demosthenesSpeech.year + '.');
  if (demosthenesSpeech.yearIsBCE === true) {
    console.log('This speech took place before the common era.');
  } else {
    console.log('This speech took place during the common era.');
  }

  if (demosthenesSpeech.year < churchillSpeech.year && demosthenesSpeech.year < ghandiSpeech.year) {
    console.log("This is the oldest speech on the page.");
  } else if (demosthenesSpeech.year > churchillSpeech.year && demosthenesSpeech.year > ghandiSpeech.year) {
    console.log("This is the most recent speech on the page.");
  }
});