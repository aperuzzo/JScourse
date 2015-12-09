var scrollSpeed,
	backPosition,
	$ariaImg,
	$horizontalImg
;

function cropImg(){
	//find all img with current height less than 200px (horizontal img)
	//greater than zero because some images are display:none = width:0
		$horizontalImg = $('img.crop').filter(function() { 
			return $(this).height() < 200 && $(this).height() > 0; });
	//for each horizontal image....	
		$horizontalImg.each(function(){
			if($(this).height() < 85){
				$(this).css({'width': '310px', 'left': '-75px'});
			// if an image has width defined as 310 don't change it to 250
			} else if (($(this).width() != 310)) { 
				//all taller horizontal images should have smaller width
				$(this).css({'width': '250px', 'left': '-60px'});
			}
		});
}

//make gallery visible and define parameters for cropping thumbs
function clickNavBtn(month){ 
	$('#nav' + month + ' a').click(function(){
		$('#mainNav a').css('color', '#490606');//change color back to normal
		$('.gallery').hide(); //hide existing gallery if present
		$(this).css('color', '#dca3b9');//when gallery is clicked, nav color highlights
		$('#gallery' + month).fadeIn(1000); //show specified month gallery
		cropImg(); //call crop function
	});
}

function closeGallery(month){
	$('#gallery' + month + ' .closeGallery').click(function(){
		$('#mainNav a').css('color', '#490606');//change color back to normal
		$('#gallery' + month).hide();
	});
}

// background scrolling feature
scrollSpeed = 100; //set speed of background scroll
backPosition = 0; // set the starting background position

function bgscroll(){
    backPosition += 1; // 1 pixel row at a time
    // move the background with backgrond-position css properties vertically
    $('body').css("backgroundPosition",  "0 " + backPosition + "px");
}

$(document).ready(function(){

//make wholePage full size of window
	$('#wholePage').height(function(){
	        return $(window).height();
	});
//and when window resizes (such as roatating phone screen) make wholePage whole page
	$(window).resize(function(){
	    $('#wholePage').height(function(){
	        return $(window).height();
	    });
	});

//make #ariaLogo visible on load
     $('div.center h2').fadeIn(900);//fade in h2
     $ariaImg = $('#ariaLogo img');
     if($(window).width() >= 600 && $(window).height() >= 600){//if window is larger than mobile
    	$ariaImg.delay(1000).animate({'width': '450px', 'height': '450px'}, 600);//animate Aria image

    } else { //if window is mobile size...
    	$ariaImg.delay(1000).animate({'width': '250px', 'height': '250px'}, 600);
    }

    $('#mainNav').delay(2000).animate({'margin-top': '35px'}, 600, function(){
    	$('#mainNav').animate({'margin-top': '0px'}, 600);
    });

//call clickNav function to display gallery by month
    clickNavBtn('03');
    clickNavBtn('06');
    clickNavBtn('09');
// close gallery invoking function
    closeGallery('03');
    closeGallery('06');
    closeGallery('09');

//Calls the background scrolling function repeatedly
    setInterval(bgscroll, scrollSpeed); 

//image gallery and it's functions
    $('.gallery img').click(function(){ //click gallery thumbnail
    	$imageSource = $(this).attr('src'); //get the image src of the image
    	//add new element to DOM of full sized image and close icon
    	$('body').prepend('<div class="hero-img"><i id="closeLgImg" class="fa fa-times"></i><img src="' + $imageSource + '"></div>');
    	$('.hero-img').fadeIn(600);
    	$('#closeLgImg').click(function(){ //clicking this element removes full-sized image
	    	$('div.hero-img').fadeOut(600, function(){
	    		$('div.hero-img').remove();
	    	});
	    });
    });
});

