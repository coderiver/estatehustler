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
	
	$('.js-validation').validator();

	$('.js-table').DataTable({
		searching: false,
		autoWidth: false,
		pageLength: 22,
		language: {
			paginate: {
				previous: '<i class="icon-prev"></i>',
				next:     '<i class="icon-next"></i>'
			},
			aria: {
				paginate: {
					previous: '',
					next:     ''
				}
			},
			info: "<strong>_END_</strong> from <strong>_TOTAL_</strong> apartments",
			lengthMenu: ""
		},
		columnDefs: [
			{ orderable: false, targets: 0},
			{ orderable: false, targets: 1},
			{ orderable: false, targets: 3},
			{ orderable: false, targets: 4},
			{ orderable: false, targets: 11}
		]
	});

});