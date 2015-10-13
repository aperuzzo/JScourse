//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var 
  churchillSpeech = {
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
  speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
  donatePrompt,
  oldestYear,
  recentYear,
  consoleDisplay = document.getElementById('ConsoleDisplay')
;

//determines which speech year is oldest or most recent
oldestYear = speechesArray[0].year;
recentYear = speechesArray[0].year;
for(var i = 0; i < speechesArray.length; i++){
   
    if(speechesArray[i].year < recentYear){
      oldestYear = speechesArray[i].year;
    }
    if(speechesArray[i].year > oldestYear){
      recentYear = speechesArray[i].year;
    }
  }

//display sidebar messages when specific speech is passed as an argument
function displaySpeechDetails(speech){
  consoleDisplay.innerHTML = "This speech was written by " + speech.author + " in " + speech.year + ".<br>";
  
  if(speech.yearIsBCE === true){
    consoleDisplay.innerHTML += 'This speech took place before the common era.<br>';
  }else{
    consoleDisplay.innerHTML += 'This speech took place during the common era.<br>';
  }

  if(speech.year === oldestYear){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the oldest speech on the page.<br>';
  }
  if(speech.year === recentYear){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the most recent speech on the page.<br>';
  }
}


//Button click events
document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  consoleDisplay.innerHTML = "";
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');
  if(donatePrompt !== null){
    if(donatePrompt >= 100){
      donationText = document.createTextNode('Thank you for your very generous donation!');
      donationDisplay.setAttribute('style', 'color: #DB152C;');

      articleElements = document.getElementsByTagName('article');
      for(var i = 0; i < articleElements.length; i++){
        articleElements[i].className = 'generous-donation';
      }
    }else{
      donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
    }
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  displaySpeechDetails(churchillSpeech);
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  displaySpeechDetails(ghandiSpeech);
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  displaySpeechDetails(demosthenesSpeech);
});