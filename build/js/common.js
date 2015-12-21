$(document).ready(function() {

	$('.js-popup-btn').click(function() {
		var btn = $(this).data('btn'),
			popup = $('.js-popup[data-popup="' + btn + '"]'),
			popups = $('.js-popup');
		popups.removeClass('is-active');
		popup.addClass('is-active');
		return false;
	});

	$('.js-popup').each(function() {
		$(this).click(function() {
			$(this).removeClass('is-active'); 
		});		
		$('.js-popup-inner').click(function(event) {
			event.stopPropagation();	
		});
	});

});