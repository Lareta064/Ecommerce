(function($){
        $(window).on("load",function(){
            $(".content").mCustomScrollbar();
        });
    })(jQuery);
$(document).ready(function() {
	
	$('.carousel').carousel({
  		interval: 4000
	});
	
	
	// MixItUp - фильтрация работ в портфолио
	$('#catalog-cards').mixItUp();

	$('li.filter-block__element span').on('click', function(){
		$(this).toggleClass('filter-block__button--active');
		$(this).parent().siblings().children('span.filter-block__button--active').removeClass('filter-block__button--active');
		
	});

	$(".reviews-carousel ").owlCarousel({
		item: 1,
 		nav:true,
 		loop:true,
	});;
})
	