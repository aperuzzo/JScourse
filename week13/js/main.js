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
    donationText,
    speechWritten,
    $placeSpeechDetails,
    $createDiv,
    $moreBtn,
    $authorBtn,
    $current,
    $next
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
//create speech info to display under speech title
  function createSpeechDetails(speech){
    $createDiv = $('#' + speech.author + ' span.date');
    speechWritten = 'This speech was written by ' + speech.author + ' in ' + speech.year + ' and';
    

    $createDiv.after('<div id="details-' + speech.author + '"><p></p></div>');//create holding div for info
    $placeSpeechDetails = $('#details-' + speech.author + ' p');
    //the code below creates the speech info
    $placeSpeechDetails.append(speechWritten)
      .css({
        "color": "#ff8a9f",
        "font-style": "italic"
      })
    ;

    if(speech.yearIsBCE === true){
      $placeSpeechDetails.append(' took place before the common era.');
    }else{
      $placeSpeechDetails.append(' took place during the common era.');
    }

    if(speech.year === oldestYear){
      $placeSpeechDetails.append('<br>This is the oldest speech on the page.');
    }
    if(speech.year === recentYear){
      $placeSpeechDetails.append('<br>This is the most recent speech on the page.'); 
    }
  }

//animate display of speech details
  function animateSpeechDetails(speech) {
    $('#details-' + speech.author).css("display", "none").fadeIn(2000);
  }

//clicks on author buttons
  function clickAuthorBtn(speech){
    $authorBtn = $('#Btn' + speech.author);
    $authorBtn.click(function(e){
      e.preventDefault();
      //scroll to speech article
      $('html, body').animate({scrollTop: $('#' + speech.author).offset().top
      }, 800, function(){
          if(!$('#details-' + speech.author).length){//if speech details are not there...
          createSpeechDetails(speech); //create them
          animateSpeechDetails(speech); //and animate them
        }
      });
      
    });
  }
  //hides all speech paragraphs except first, adds a "read more" button
  function hideP(speech){
    $('#' + speech.author + ' p:not(:first)').hide();
    $('#' + speech.author + ' p:first').after('<div class="more"><i class="fa fa-sort-desc"></i> <span>read more</span> <i class="fa fa-sort-desc"></i></div>');
  }

  //click the more button to reveal rest of speech
  function clickMore(speech){
    $moreBtn = $('#' + speech.author + ' .more');
    $moreBtn.click(function(){
      $(this).hide();
      $('#' + speech.author + ' p:not(:first)').fadeIn(800);
    })
  }

  // create message if donation is given
  function createDonationMessage(text){
    $('body').prepend('<div id="donateMessage">' + text + '</div>');
    $('#donateMessage').hide().slideDown();//first hide div, then animate it
  }

  function rotateImages(){
    $current = $('#slider div.current');
    $next = ($current.next().length > 0) ? $current.next() : $('#slider div:first');

    $current.removeClass('current').addClass('previous');
    $next.css('opacity', 0).addClass('current').animate({opacity: 1}, 1300, function(){
      $current.removeClass('previous');
      })
  }

$("document").ready(function (){
  //Button click events
  $('#BtnDonate').click(function(){
    $('#donateMessage').remove();//remove message if it is there
    donatePrompt = window.prompt('How much would you like to donate?');
    if(donatePrompt !== null && !isNaN(donatePrompt) && donatePrompt > 0){
      if(donatePrompt >= 100){
        donationText = '<h2 class="generous">Thank you for your very generous donation of $' + donatePrompt + '!</h2>';
      }else {
        donationText = '<h2>Thank you for your donation of $' + donatePrompt + '</h2>';
      }
    createDonationMessage(donationText);
    } else {
        alert('Please enter a valid amount');
    }
  
  });

  //when top button is clicked, scroll to top
  $('#BtnTop').click(function(e){
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, 800);
  });

  clickAuthorBtn(churchillSpeech);
  clickAuthorBtn(ghandiSpeech);
  clickAuthorBtn(demosthenesSpeech);

  hideP(churchillSpeech);
  hideP(ghandiSpeech);
  hideP(demosthenesSpeech);

  clickMore(churchillSpeech);
  clickMore(ghandiSpeech);
  clickMore(demosthenesSpeech);

  setInterval('rotateImages()', 3000);


});