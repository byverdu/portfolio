$(document).ready(function() {

	// add animation classes

	$('.icons').hover(function() {
		$(this).addClass('animated wobble');
	}, function() {
		$(this).removeClass('animated wobble');
	});

	$('.circle').hide();
	$('.makers').show();

	setTimeout(function(){ $('.makers').addClass('animated wobble') },800);

	// Makers effects
	$('.makers').hover(function() {
		$(this).find('.techs,.title').css('visibility', 'hidden');
		$(this).find('.hoverInfo').remove();

		$('.twitter').addClass('animated flipInX').show();
	}, function(){
		$(this).find('.techs,.title').css('visibility', 'visible');

	});

	// Twitter effects
	$('.twitter').hover(function() {
		$(this).find('.techs,.title').css('visibility', 'hidden');
		$(this).find('.hoverInfo').remove();

		$('.book').addClass('animated fadeInDown').show();
	}, function(){
		$(this).find('.techs,.title').css('visibility', 'visible');
	});

	// Book effects
	$('.book').hover(function() {
		$(this).find('.techs,.title').css('visibility', 'hidden');
		$(this).find('.hoverInfo').remove();

		$('.ergos').addClass('animated rotateInDownRight').show();
	}, function(){
		$(this).find('.techs,.title').css('visibility', 'visible');
	});


	// Ergos effects
	$('.ergos').hover(function() {
		$(this).find('.techs,.title').css('visibility', 'hidden');
		$(this).find('.hoverInfo').remove();

		$('.zoo').addClass('animated bounceInDown').show();
	}, function(){
		$(this).find('.techs,.title').css('visibility', 'visible');
	});


	// Zoo effects
	$('.zoo').hover(function() {
		$(this).find('.techs,.title').css('visibility', 'hidden');
		$(this).find('.hoverInfo').remove();

		$('.shopList').addClass('animated flip').show();
	}, function(){
		$(this).find('.techs,.title').css('visibility', 'visible');
	});

	// List effects
	$('.shopList').hover(function() {
		$(this).find('.techs,.title').css('visibility', 'hidden');
		$(this).find('.hoverInfo').remove();

		$('.next').addClass('animated flip').show();
	}, function(){
		$(this).find('.techs,.title').css('visibility', 'visible');
	});

	// Next effects
	$('.next').hover(function() {
		$(this).find('.techs,.title').css('visibility', 'hidden');
		$(this).find('.hoverInfo').remove();
	}, function() {
		$(this).find('.techs,.title').css('visibility', 'visible');
	});

});
