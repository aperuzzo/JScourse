$("document").ready(function (){
	//when any a element is clicked, that element's background color changes
	$('a').click( function(){
		$(this).toggleClass('addBackground');
	})

	//finds h2 with varius, toggles display of paragraph directly below
	var varius = $('h2:contains("Varius")');
	varius.click( function(){
		$(this).next("div").toggle();
	})

});
