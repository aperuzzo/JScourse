

$("document").ready(function (){
	//create the nav menu by grabbing h1 titles
	var $recipeItems = $('.recipe h1');
	//this function builds the nav and all of it's functionality
	$recipeItems.each(function(i){
		//create unique id for each article containing H1 recipe title
		$(this).parent().attr('id', 'recipe-' + i);
		var navText = $(this).text();
		//create an li and a element that links to cooresponding recipe title
		//nav created
		$('#navItems').append('<a href="#recipe-' + i + '"><li>' + navText + '</li></a>');

		var //vars created AFTER nav is built
			$link = $('a[href="#recipe-' + i + '"]'),
			$linkLi = $('a[href="#recipe-' + i + '"] li')
		;
		//click any link
		$link.click(function(){
			//.clicked changes background-color and font color of nav menu item on click
			$('.clicked').removeClass('clicked');
			$(this).addClass('clicked');
			$linkLi.addClass('clicked');

			//look for class current, fade it out...
			$('.current').animate({opacity: 0}, 200, function(){
				$(this).removeClass('current');//remove current class....
			});
			//find the recipe that cooresponds to link and fade it in
			$('#recipe-' + i).animate({opacity: 1}, 1400, function(){
				$(this).addClass('current');//add class current 
			})
		});
		
		$linkLi.hover(function(){
			$(this).animate({
				fontSize: '+=1px',
				padding: '+=1px'
			}, 150);
		}, function(){
			$(this).animate({
				fontSize: '-=1px',
				padding: '-=1px'
			}, 150);
		});
	}); 

	//change 'menu' to 'x' and back
	$('#menuBtn').click(function (event){
		event.preventDefault();
		if ($(this).hasClass('closed')) { //if menu is closed
			$('#navItems').slideDown(500); //slide down menu
			$(this).removeClass('closed') 
					.addClass('open')
					.hide() //temporarily hide icon
					.html('<i class="fa fa-times"></i>')//change to 'x'
					.fadeIn(400); //now show icon
		} else {
			$('#navItems').slideUp(500); //reverse what happened above
			$(this).removeClass('open')
					.addClass('closed')
					.hide()
					.html('<p>menu</p>')
					.fadeIn(400);	
		}
		
	});


});