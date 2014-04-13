// custom js

$(document).ready(function() {
// Initiate the slick slider plugin
	var slickIndex = 1;
	$('.slick_slider').slick({

		onAfterChange: function(){
			// Had to put in a timeour because the callback triggered faster than the active class could be applied
			setTimeout(function(){
				currentImg = $('.slick-active').find('img');
				responsive = currentImg.data('res');
				console.log(responsive);
				if ( responsive ) {
					console.log("This is responsive");
				}
				else {
					console.log("This is not responsive");
				}
  			}, 1); //end of setTimeout()


		} //end of onAfterChange	

	}); //end of slick()
}); //end of document.ready()