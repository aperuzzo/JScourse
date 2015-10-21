$("document").ready(function (){
	//My Javascript option
	//identify individual <li> button for click event
	var listItems = document.getElementsByTagName('li');
	for(var i = 0; i < listItems.length; i++) {
		listItems[i].addEventListener('click', toUppercase, false);
	}
	//check <li> add class transform if blank, remove class if present
	function toUppercase(){
		if(this.className === ""){
			this.className = "transform";
		} else {
			this.className = "";
		}
	}

	//MY Jquery option- much shorter!! both work and do the same thing!
	// $('li').click(function(){
	// 	if ($(this).hasClass('')) {
	// 		$(this).addClass('transform');
	// 	} else {
	// 		$(this).removeClass('transform');
	// 	}
	// });

});