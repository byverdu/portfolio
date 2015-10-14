/*global $,document,window,Modernizr*/

'use strict';

$(document).ready(function() {
	
	if(!Modernizr.svg){

		$('.github').attr('src' , 'img/github.png');
		$('.mail').attr('src'   , 'img/mail.png');
		$('.twitter').attr('src', 'img/twitter.png');
		$('.world').attr('src'  , 'img/world.png');
	}


	// Safari Hack, don't know why animate.css is not working
	var userAgent = window.navigator.userAgent;
	var baseUrl   = window.location.href;

	if(userAgent.indexOf('Chrome') > -1 || userAgent.indexOf('Firefox') > -1){

		var bodyTag   = document.querySelector('body');
		var newScript = document.createElement('script');
		newScript.setAttribute('src',baseUrl+'js/animations.js');

		bodyTag.appendChild(newScript);

	}  

	if(userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1) {

		var headTag = document.querySelector('head');
		var newStyleSheet = document.createElement('link');
		newStyleSheet.setAttribute('href',baseUrl+'css/safari.css');
		newStyleSheet.setAttribute('rel','stylesheet');

		headTag.appendChild(newStyleSheet);
	}


	// Dealing with footer and contact form.

	$('a[href=#sayHello]').click(function(event) {
		var height = $(document).height();
    $('html, body').animate({ scrollTop: height }, 500);
		event.preventDefault();
	});

	(function(){
		var form = document.querySelector('form');

		// The 'invalid' event is the one that triggers the
		// errors. Here we are preventing those errors.
		form.addEventListener( 'invalid',function(event){
	    event.preventDefault();
	  },true);

	  var button = form.querySelector('button');

	  // Adding the new behaviour to the DOM 
	  button.addEventListener('click', function(){

	  	// Saving all the errors in a variable
	  	var invalid = form.querySelectorAll(':invalid');

	  	console.log(invalid);
			
			// Starts at 1 so we take out the fieldset tag
			for(var i = 0; i < invalid.length;i++){

				// div for the error messages
				var error = document.createElement('div');
				// Targeting the parent on the input 
				var label = invalid[i].parentNode;

				console.log(label);

				// Adding the classes to the div
				error.className = 'error';
				// Setting the innerHtml with the 
				// validationMessage property for each error
				error.textContent = invalid[i].validationMessage;

				label.insertBefore(error,invalid[i].nextSibling);
			}

			// Removing the actual error messages
			window.setTimeout(function(){

				var allErrors =document.querySelectorAll('.error');

				for(var i =0;i<allErrors.length;i++){

					allErrors[i].remove();
				}
			},7000);
		});
	})();

  // Hiding messages
	// window.setTimeout(function() {
 //    $('.info, .error').fadeTo(5000, 0).slideUp(500, function(){
 //        $(this).remove();
 //    });
 //  }, 4000);

});














