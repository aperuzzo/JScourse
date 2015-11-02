$("document").ready(function (){
	//adding v to vegetatian options in room service page
	$('li[data-type="veg"]').append(' (v)');

	//select h2 elements
	var specials = $('.content h2');
	//create ul element
	$('.content h1').after('<ul></ul>');

	specials.each(function(i){
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

});

