var scrollSpeed,
	backPosition,
	$ariaImg
;


function clickNavBtn(month){
	$('#nav' + month).click(function(){
		$('.gallery').hide(); //hide existing gallery if present
		$('#gallery' + month).fadeIn(); //show specified month gallery	
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
    	$('#warpedTop span').delay(1000).animate({'font-size': '64px'}, 800);//animate title
    	$('#warpedBottom span').delay(1000).animate({'font-size': '64px'}, 800);
    } else { //if window is mobile size...
    	$ariaImg.delay(1000).animate({'width': '250px', 'height': '250px'}, 600);
    	$('#warpedTop span').delay(1000).animate({'font-size': '42px'}, 800);
    	$('#warpedBottom span').delay(1000).animate({'font-size': '42px'}, 800);
    }

    $('#mainNav').delay(2000).animate({'margin-top': '35px'}, 600, function(){
    	$('#mainNav').animate({'margin-top': '0px'}, 600);
    });

//call clickNav function to display gallery by month
    clickNavBtn('03');
    clickNavBtn('06');
    clickNavBtn('09');

//Calls the background scrolling function repeatedly
    setInterval(bgscroll, scrollSpeed); 

//image gallery and it's functions
    $('.gallery img').click(function(){ //click gallery thumbnail
    	$imageSource = $(this).attr('src'); //get the image src of the image
    	//add new element to DOM of full sized image
    	$('body').prepend('<div class="hero-img"><i id="closeLgImg" class="fa fa-times"></i><img src="' + $imageSource + '"></div>');
    	$('#closeLgImg').click(function(){ //clicking this element removes full-sized image
	    	$('div.hero-img').remove();
	    });

    });

    

    

});

