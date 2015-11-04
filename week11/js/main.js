$("document").ready(function (){
	//adds image to menu items
	$('div#menu ul li a').prepend('<img src="icon.png">');

	// on click toggle newBackground class
	$('#header h1').click(function(){
		$('#header').toggleClass('newBackground');
	});

	//change first a element in sidebar 1 to red
	$('li#sidebar_content_1 ul li:first a').css('color', 'red');

	//move even numbered li elements by 5 pixels
	$('li#sidebar_content_2 ul li:odd').css('margin-left', 5);

	// change content on click
	$('#content div.post:first h2').click(function(){
		$('#content div.post:first div.entry').html("<p> I'm changing this content to this different content</p>");
	});

	//toggle visibility of sidebar 1 content
	$('li#sidebar_content_1 h2').click(function(){
		$('li#sidebar_content_1 ul').toggleClass('hideSidebarContent');
	});

});
