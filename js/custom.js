// custom js

$(document).ready(function() {

// Javascript for the web slider
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Variables with each jquery slider object
var webSlider = $('.web_container .slick_slider');
var logoSlider = $('.logo_container .slick_slider');
var graphicSlider = $('.graphic_container .slick_slider');
var link = $('.web_link');
var linkText = link.find('span');
var padImage = $('.pad img');
var phoneImage = $('.phone img');
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
webSlider.slick({
	speed: 500 ,
	dots: true ,

	onAfterChange: function(){
		// Had to put in a timeour because the callback triggered faster than the active class could be applied
		setTimeout(function(){
			var currentImg = $('.web_container .slick-active').find('img');
			var responsive = currentImg.data('res');
			var projectNr = currentImg.data('proj');


			// for responsive images only 
			if ( responsive ) {
				responsiveDevices.fadeIn('fast');
				// get the images for responsive devices
				var project = currentImg.data('proj');
				switch (project) {
					case "project1":
						padImage.fadeTo(100,0.50, function() {
							$(this).attr("src" , "img/slider/web/project1-pad.jpg");
						}).fadeTo(100,1);
						phoneImage.fadeTo(80,0.50, function() {
							$(this).attr("src" , "img/slider/web/project1-phone.jpg");
						}).fadeTo(100,1);
						break;
					case "project3":
						padImage.fadeTo(80,0.50, function() {
							$(this).attr("src" , "img/slider/web/project3-pad.jpg");
						}).fadeTo(100,1);
						phoneImage.fadeTo(80,0.50, function() {
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
					linkText.html("Ciclist");
					break;
				case "project2":
					link.attr("href" , "http://www.google-2.com");
					linkText.html("Electronica");
					break;
				case "project3":
					link.attr("href" , "http://www.google-3.com");
					linkText.html("Autobus Rosu");
					break;
				default:
					
			}

			}, 1); //end of setTimeout()
		// change link title to reflect website
		linkText.removeClass("webTitlefadeOut");
		linkText.addClass("webTitlefadeIn");

	}, //end of onAfterChange	
	onBeforeChange: function() {
		linkText.addClass("webTitlefadeOut");
	}

}); //end of slick()

// Javascript for the logo slider
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// variables for the logo slider
var text_container = $('.logo_slider h3 span');
var slideProgress = $('.logo_slider h3 div');
var logoSlidesTotal = logoSlider.find("div").length;

// Initiate the slick slider plugin
console.log("The length of the logo slider is" + logoSlidesTotal);
logoSlider.slick({
	speed: 500 ,
	dots: false,

	onAfterChange: function(){
		setTimeout(function(){

			var currentImg = $('.logo_container .slick-active').find('img');
			var titlu_logo = currentImg.data('title');
			var current = logoSlider.get(0).slick.currentSlide; //current index in the slider
			// calculates how much the width of the span should be, to reflect the progress
			var calculateProgress = ( 100 / (logoSlidesTotal - 1) ) * current;
			var progress = String(calculateProgress) + "%";
			// modify the text for the appropriate element
			text_container.text(titlu_logo);
			// slide progress, makes the before element increase in width with progress
			slideProgress.css("width", progress);
			console.log(progress);

		}, 1); //end of setTimeout()
	} // end of onAfterChange
});

// Javascript for the graphic slider
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// variables for the misc slider
var text_container_misc = $('.bottom_divider h3');
var slideProgress_misc = $('.bottom_divider div');
var miscSlidesTotal = graphicSlider.find("div").length;
console.log("The length of the misc slider is" + miscSlidesTotal);
// Initiate the slick slider plugin
graphicSlider.slick({
	speed: 500,

	onAfterChange: function() {
		setTimeout(function(){

			var currentImg = $('.graphic_slider .slick-active').find('img');
			var titlu_misc = currentImg.data('title');
			var current = graphicSlider.get(0).slick.currentSlide; //current index in the slider
			// calculates how much the width of the span should be, to reflect the progress
			var calculateProgress = ( 100 / (miscSlidesTotal - 1) ) * current;
			var progress = String(calculateProgress) + "%";
			// modify the text for the appropriate element
			text_container_misc.text(titlu_misc);
			// slide progress, makes the before element increase in width with progress
			slideProgress_misc.css("width", progress);
			console.log(progress);

		}, 1); //end of setTimeout()
	} // end of onAfterChange
})

// Form effects
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var focusedElement = $('.form_input');
var labels = $('.footer_contact label');

var name = labels.eq(0);
var email = labels.eq(1);
var message = labels.eq(2);

focusedElement.focus(function() {
	var elementId = $(this).attr('id');
	switch (elementId) {
				case "yName":
					name.addClass('focused');
					break;
				case "yEmail":
					email.addClass('focused');
					break;
				case "yMessage":
					message.addClass('focused');
					break;
	}
});
focusedElement.focusout(function() {
	labels.removeClass('focused');	
});
// Social links
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var socialLinks = $('.social_contact li');
socialLinks.hover(
  function() {
    $(this).addClass("social_hover");
    console.log('rolledin');
  }, function() {
    $(this).removeClass("social_hover");
    console.log('rolledout');
  }
);
}); //end of document.ready()
// Contact form validation
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// this runs when the submit button is clicked
var formName = $("#yName");
var formEmail = $("#yEmail");
var formMessage = $("#yMessage");

function testError(object, message) {
	var errorMsg = '<span class="errorMsg"> - ' + message + '</span>';
	var objectValue = object.val();
	var labelId = object.attr('id');
	var labelObj = $("label[for='"+labelId+"']")

    if (objectValue == null || objectValue == "" || objectValue == undefined) {
    	labelObj.append(errorMsg);
    	// wait some time before fading it away
    	setTimeout(function(){
    		$('.errorMsg').fadeOut(200, function() {
    			$(this).remove();
    		});
    	}, 600);
  		return false;
	}
	else if (object == formEmail) {
		var atpos = objectValue.indexOf("@");
		var dotpos = objectValue.lastIndexOf(".");
		var vlength = objectValue.length;
		if (atpos < 1 || dotpos<atpos+2 || dotpos+2>=vlength) {
			labelObj.append('<span class="errorMsg"> - Please enter a valid email</span>');
			return false;
		}
	}
	else {
		return true;
	}
}
function validateForm() {
	var yName = testError(formName, 'Please enter your name');
	var yEmail = testError(formEmail, 'Please enter your email');
	var yMessage = testError(formMessage, 'Please enter your message');
	return (yName && yEmail && yMessage);
}