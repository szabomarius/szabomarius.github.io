// custom js

// Initiate the slick slider plugin
$(document).ready(function() {
	$('.slick_slider').slick({

		onAfterChange: function(){
			var currentImg = $('.slick-active').find('img');
			console.log(currentImg.data('res'));

			if ( currentImg.attr('class') ) {

			};
		}

	});
});