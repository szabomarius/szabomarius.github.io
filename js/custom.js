// custom js

$(document).ready(function() {
// Make the phone and pad screen invisible if the first project is not responsive
var firstImg = $('.desktop_slider .slick_slider').find('img').first();
var responsiveDevices = $('.pad, .phone');
if ( firstImg.data('res') ) {
	console.log ("the first image is responsive");
} else {
	console.log ("the first image is not responsive");
	console.log (responsiveDevices);
	responsiveDevices.hide();
}
// Initiate the slick slider plugin
	var slickIndex = 1;
	$('.slick_slider').slick({

		onAfterChange: function(){
			// Had to put in a timeour because the callback triggered faster than the active class could be applied
			setTimeout(function(){
				currentImg = $('.slick-active').find('img');
				responsive = currentImg.data('res');
				if ( responsive ) {
					responsiveDevices.fadeIn('fast');
				}
				else {
					responsiveDevices.fadeOut('fast');
				}
  			}, 1); //end of setTimeout()


		} //end of onAfterChange	

	}); //end of slick()
}); //end of document.ready()