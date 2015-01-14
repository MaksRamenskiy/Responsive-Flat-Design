$(document).ready(function(){
	$nav = $('.nav-list');

			$('.menu-icon').click(function(){
				$nav.slideToggle();
			});

			$(window).resize(function(){
				if ( $(window).width() >= 655 ){
					$nav.show();
				}else {
					$nav.hide();
				}
			});

			$('.nav-right').click(function() {
				var currentSlide = $('.active-slide');
				var nextSlide = currentSlide.next();

				var currentDot = $('.active-dot');
				var nextDot = currentDot.next();

				if(nextSlide.length === 0) {
					nextSlide = $('.slide').first();
					nextDot = $('.dot').first();
				}

				currentSlide.fadeOut(600).removeClass('active-slide');
				nextSlide.fadeIn(600).addClass('active-slide');
				currentDot.removeClass('active-dot');
				nextDot.addClass('active-dot');
			});

			$('.nav-left').click(function() {
				var currentSlide = $('.active-slide');
				var nextSlide = currentSlide.prev();

				var currentDot = $('.active-dot');
				var nextDot = currentDot.prev();

				if(nextSlide.length === 0){
					nextSlide = $('.slide').last();
					nextDot = $('.dot').last();
				}

				currentSlide.fadeOut(600).removeClass('active-slide');
				nextSlide.fadeIn(600).addClass('active-slide');
				currentDot.removeClass('active-dot');
				nextDot.addClass('active-dot');

			});
});