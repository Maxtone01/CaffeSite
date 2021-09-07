$('document').ready(function(){
	$('.tgSwitch').each(function(){
		if ($(this).find('input').attr('checked')) {
			$(this).addClass('active');
			$(this).find('.slider').css({"-webkit-transform" : "translateX(39px)"});
		}
	});
});


$('.tgSwitch').click(function(){
	if ($(this).find('input').attr('checked')) {
		$(this).removeClass('active');
		$(this).find('input').attr('checked', false);
		$(this).find('.slider').css({"-webkit-transform" : "translateX(0px)"});
	} else {
		$(this).addClass('active');
		$(this).find('input').attr('checked', true);
		$(this).find('.slider').css({"-webkit-transform" : "translateX(39px)"});
	}
});