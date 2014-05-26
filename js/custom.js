// custom js

$(document).ready(function() {

// Javascript for the web slider
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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
	$('.web_container .slick_slider').slick({
		speed: 500 ,

		onAfterChange: function(){
			// Had to put in a timeour because the callback triggered faster than the active class could be applied
			setTimeout(function(){
				var currentImg = $('.web_container .slick-active').find('img');
				var responsive = currentImg.data('res');
				var projectNr = currentImg.data('proj');
				var link = $('.web_link');

				// for responsive images only 
				if ( responsive ) {
					responsiveDevices.fadeIn('fast');
					// get the images for responsive devices
					var project = currentImg.data('proj');
					switch (project) {
						case "project1":
							$(".pad img").fadeTo(100,0.50, function() {
								$(this).attr("src" , "img/slider/web/project1-pad.jpg");
							}).fadeTo(100,1);
							$(".phone img").fadeTo(80,0.50, function() {
								$(this).attr("src" , "img/slider/web/project1-phone.jpg");
							}).fadeTo(100,1);
							break;
						case "project3":
							$(".pad img").fadeTo(80,0.50, function() {
								$(this).attr("src" , "img/slider/web/project3-pad.jpg");
							}).fadeTo(100,1);
							$(".phone img").fadeTo(80,0.50, function() {
								$(this).attr("src" , "img/slider/web/project3-phone.jpg");
							}).fadeTo(100,1);
							break;
					} // end switch
				}
				else {
					responsiveDevices.fadeOut('fast');
				} // end if else

				// Change links according to the current selected
				switch (projectNr) {
					case "project1":
						link.attr("href" , "http://www.google-1.com");
						break;
					case "project2":
						link.attr("href" , "http://www.google-2.com");
						break;
					case "project3":
						link.attr("href" , "http://www.google-3.com");
						break;
					default:
						
				}

  			}, 1); //end of setTimeout()


		} //end of onAfterChange	

	}); //end of slick()

// Javascript for the logo slider
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Initiate the slick slider plugin

$('.logo_container .slick_slider').slick({
	speed: 500 ,

	onAfterChange: function(){
		setTimeout(function(){

			var currentImg = $('.logo_container .slick-active').find('img');
			var titlu_logo = currentImg.data('title');
			var text_container = $('.logo_slider h3');
			text_container.text(titlu_logo);

		}, 1); //end of setTimeout()
	} // end of onAfterChange
});

// Javascript for the graphic slider
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

$('.graphic_container .slick_slider').slick({
	speed: 500
})

}); //end of document.ready()