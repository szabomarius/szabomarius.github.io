$(document).ready(function() {
// Responsive window width for the footer
var windo = $(window);
$(window).resize(function() {
        var wi = window.outerWidth;
        console.log('Screen width is currently: ' + wi + 'px.');
});
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
var firstImg = $('.desktop_slider .slick_slider').find('img').first();
var responsiveDevices = $('.pad, .phone');
var info_btn = $('.info_btn');
var info = $('.slide_info');
var close_info = $('.close_info');
var info_txt = info.find('p');

// Variables with the description of each web slide

var descriptions = [
	// eva gaja
	"This is a redesign of the original site. It uses a simple slider made in javascript/jQuery. Most images required to be cutout in photoshop to achieve the desired effect that you can see in the thumbnail. I designed and developed it." ,
	// personal portofolio
	"This is my personal portofolio website, the same one you are using right now. The reason I put it in here, is to showcase the fact that I do have the capabilities to make a responsive website. Most animations are done in CSS3 and the important ones have jQuery fallback in case of older browsers. I designed and developed it." ,
	// redhouse
	"This is another redisign of the original website. I opted for a 2 column layout, where I position the main content on the left, and the sidebar which features quick links and widgets on the right. Unfortunately, the website is only 90% completed because the restaurant has closed while in development. I designed and developed it.",
	// ritmocardio
	"This website was made using Wordpress, and each section is editable from the administrator panel. The main reason for using a CMS was for the medical team to be able to personally edit the website and they needed a forum type section where people could post comments or questions about procedures. I designed and developed it.",
	// ciurila
	"This website also uses Wordpress. The sections are editable, widgets can be placed in the 2 sidebars, there is an editable gallery and news template. The gallery relies on the fancy box jQuery plugin and with the events you can put a calendar widget to properly show you the date of all upcoming events. I only developed this website (front and backend)",
	// my blog
	"This is my personal blog that I designed. It is currently in development and will soon be launched and linked properly in the contact page of my portofolio website. When a page has articles of text as its main focus, I enjoy it to be as clutter free as possible. With that in mind I tried to make the blog as simple and easy to read as possible. I designed it and will develop it",
	// happy pups
	"A personal project of mine where I designed a one page website for a fictional dog walking company called HappyPups. I made the logo and graphics for it and I'm planning to develop it using the foundation framework as practice. It will also be fully responsive. I designed it and will develop it",
	// primarie
	"This was a project that never came into fruition. I tried to design a town hall website to be as modern as possible while still being able to serve the heavy amount of information that such a website is supposed to. Opted for a 2 collumn layout simply because there was a need for some links to always be accesible to users. I designed it and will probably not develop it.",
	// upload platform
	""
]

// Hide every other device instead of the first one, or something like that
if ( firstImg.data('res') ) {
	console.log ("the first image is responsive");
} else {
	responsiveDevices.hide();
}

// Controls for the Slide info section, the text will be updated inside the onAfterChange callback function from the slickslider

info_btn.click(function(){
	info.toggleClass('toggle_info');
});
close_info.click(function(){
	info.toggleClass('toggle_info');
})

// Initiate the slick slider plugin
webSlider.slick({
	speed: 500 ,
	dots: true ,
	touchThreshold: 20,
	slide: 'img',
	onAfterChange: function(){
		// Had to put in a timeour because the callback triggered faster than the active class could be applied
		setTimeout(function(){
			var currentImg = $('.web_container .slick-active');
			console.log(currentImg);
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
					link.attr("href" , "http://szabomarius.comze.com/evagaja/");
					linkText.html("Art Eva Gaja");
					info_txt.html(descriptions[0]);
					break;
				case "project2":
					link.attr("href" , "#");
					linkText.html("My Portofolio");
					info_txt.html(descriptions[1]);
					break;
				case "project3":
					link.attr("href" , "https://dl.dropboxusercontent.com/u/16930332/redhouse/index.html");
					linkText.html("Restaurant RedHouse");
					info_txt.html(descriptions[2]);
					break;
				case "project4":
					link.attr("href" , "http://szabomarius.comze.com/wp_ritmocardio/");
					linkText.html("Ritmocardio");
					info_txt.html(descriptions[3]);
					break;
				case "project5":
					link.attr("href" , "http://szabomarius.comze.com/wp_ciurila/");
					linkText.html("Ciurila - (Only Development)");
					info_txt.html(descriptions[4]);
					break;
				case "project6":
					link.attr("href" , "https://www.behance.net/gallery/17536897/My-personal-blog");
					linkText.html("My blog - (Design)");
					info_txt.html(descriptions[5]);
					break;
				case "project7":
					link.attr("href" , "https://www.behance.net/gallery/17532297/HappyPupscom");
					linkText.html("HappyPups - (Design)");
					info_txt.html(descriptions[6]);
					break;
				case "project8":
					link.attr("href" , "https://www.behance.net/gallery/17546015/Town-Hall-Design");
					linkText.html("Primaria Cosna - (Design)");
					info_txt.html(descriptions[7]);
					break;					
				case "project9":
					link.attr("href" , "https://www.behance.net/wip/629737/1161061");
					linkText.html("Upload Platform - (In-Development)");
					info_txt.html(descriptions[8]);
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
	},
	responsive: {
		breakpoint: 795,
		settings: [{
			dots: false,
			arrows: false
		}]
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
	touchThreshold: 20,
	dots: false,
	lazyLoad: 'ondemand',

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
	}, // end of onAfterChange
	responsive: {
	breakpoint: 795,
		settings: {
			dots: false,
			arrows: false
		}
	}
});
// Light logo change button
// light logo, change the logos to a darker / whiter background
var logoSliderImg = logoSlider.find('img');
var logoControl = $('.logo_light');
var logoArray = [];
var logoArrayD = [];

// itterates over each img from logo slider and changes the src
function logoLight() {
	logoSliderImg.each(function() {
		var dis = $(this);
		var getDark = dis.data('dark');
		var getLight = dis.data('lazy');
		if (!dis.hasClass('dark')) {
			dis.attr('src' , getDark ).addClass('dark');
		}
		else {
			dis.attr('src' , getLight).removeClass('dark');
		}
	});
	logoSlider.toggleClass('dark_bg');
	logoControl.toggleClass('change_bulb');
}
// Add event listener for button
logoControl.click(function() {
	logoLight();
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
	touchThreshold: 20,
	lazyLoad: 'ondemand',

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
	}, // end of onAfterChange
	responsive: {
		breakpoint: 795,
		settings: [{
			dots: false,
			arrows: false
		}]
	}
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

// Make the Section colapse using CSS3 transitions and shit
var sections = $('.type_of_work h2');
sections.click(function() {
	$(this).toggleClass('plus');
	$(this).parent().toggleClass('minus');
});

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
			setTimeout(function(){
				$('.errorMsg').fadeOut(200, function() {
					$(this).remove();
				});
			}, 600);
			return false;
		}
		return true;
	}
	else {
		return true;
	}
}
function validateForm() {
	var yName = testError(formName, 'Please enter your name');
	var yEmail = testError(formEmail, 'Please enter your email');
	var yMessage = testError(formMessage, 'Please enter your message');
	var result = yName && yEmail && yMessage;
	console.log("y Name is " + yName);
	console.log("y Message is " + yMessage);
	console.log("y Email is " + yEmail);
	console.log(result);
	return result;
}