//for index page slideshow
function rotateImages(){
	var $current = $('#hero div.current');
	var $next = ($current.next().length > 0) ? $current.next() : $('#hero div:first');

	$current.removeClass('current').addClass('previous');
	$next.css('opacity', 0).addClass('current').animate({opacity: 1}, 1300, function(){
		$current.removeClass('previous');

	})
}

$("document").ready(function (){
	//adding v to vegetatian options in room service page
	$('li[data-type="veg"]').append(' (v)');

	//select h2 elements
	var $specials = $('.content h2');
	//create ul element
	$('.content h1').after('<ul></ul>');

	$specials.each(function(i){
		//create unique id for each special h2
		$(this).attr('id', 'special' + i);
		var headerText = $(this).text();
		//create an li and a element that links to cooresponding special h2
		$('.content ul').append('<li><a href="#special' + i + '">' + headerText + '</a></li>');
	});

	//toggle background color of .event div and color of contained ul
	$('div.event').hover(function(){
		$(this).toggleClass('yellow');
		$(this).children('ul').toggleClass('red');
	});

	setInterval('rotateImages()', 4000);
	
});


