$(document).on('ready', function(){

	/**** FILTER PORTFOLIO ****/
	$('.section-portfolio .filter-portfolio li').on('click', function(){
		//change active li filter
		$('.section-portfolio .filter-portfolio li').removeClass('active');
		$(this).addClass('active');

		//filter portfolio
		var filter = $(this).attr('data-filter');
		$('.section-portfolio .row > div').children().css({
			'pointer-events':'none',
			'opacity':'.4'
		});
		$('.section-portfolio .row > div').children(filter).css({
			'pointer-events':'auto',
			'opacity':'1'
		});
		if(filter == 'all') {
	  		$('.section-portfolio .row > div').children().css({
	  		'pointer-events':'auto',
	  		'opacity':'1'
	  		});
  		}
	});

	/**** Swiper Testimonials Slider ****/ /* more information : http://idangero.us/swiper/demos/#.V_0G2Tjy31V */
	var swiper = new Swiper('.section-testimonials .swiper-container', {
	    pagination: '.section-testimonials .swiper-pagination',
	    paginationClickable: true,
	    slidesPerView: 3,
	    spaceBetween: 30,
	    breakpoints: {
	        1024: {
	            slidesPerView: 3,
	            spaceBetween: 40
	        },
	        768: {
	            slidesPerView: 2,
	            spaceBetween: 30
	        },
	        640: {
	            slidesPerView: 1,
	            spaceBetween: 20
	        },
	        320: {
	            slidesPerView: 1,
	            spaceBetween: 10
	        }
	    }
	});

	/**** Swiper Interests Slider ****/
	var swiper = new Swiper('.section-interests .swiper-container', {
	    pagination: '.section-interests .swiper-pagination',
	    paginationClickable: true,
	    slidesPerView: 6,
	    spaceBetween: 30,
	    breakpoints: {
	        1024: {
	            slidesPerView: 5,
	            spaceBetween: 40
	        },
	        768: {
	            slidesPerView: 4,
	            spaceBetween: 30
	        },
	        640: {
	            slidesPerView: 2,
	            spaceBetween: 20
	        },
	        320: {
	            slidesPerView: 1,
	            spaceBetween: 10
	        }
	    }
	});

	/**** MENU ****/
	$('.menu a').on('click', function(e){
		e.preventDefault();
		//change active li menu
		$('.menu a').removeClass('active');
		$(this).addClass('active');

		//scroll on click
		$('html,body').animate({
			scrollTop: $('#'+$(this).data('value')).offset().top - 20
		},1500);
	});

	//open and close menu
	$('.menu .open-menu').on('click', function(){
		if($('.menu').css('left') == '-160px'){
			$('.menu').css('left','0px');
			$('.menu .open-menu i').attr('class','fa fa-times');
		}
		else if($('.menu').css('left') == '0px'){
			$('.menu').css('left','-160px');
			$('.menu .open-menu i').attr('class','fa fa-bars');
		}
	});

	/**** SCROLL FUNCTION  ****/
	$(window).on('scroll', function(){

		//menu on scroll
		var windowScroll = $(window).scrollTop();
		$('.section').each(function(i){
			if($(this).position().top <= windowScroll + 200){
				$('.menu a.active').removeClass('active');
				$('.menu a').eq(i).addClass('active');
			}
		});

		// show and hiding button scroll top
		if($(this).scrollTop()>= 1200)
		{
			$(".scroll-top").fadeIn(500);
		}
		else
		{
			$(".scroll-top").fadeOut(500);
		}

	});

	//button scroll top on click
	$(".scroll-top").on('click', function(){
		$("html,body").animate({scrollTop: 0},1500);
	});

	/**** THEME-OPTION ****/

	$('.theme-option .open-theme').on('click', function(){
		if($('.theme-option').css('right') == '-227px'){
			$('.theme-option').css('right','0');
		}

		else if($('.theme-option').css('right') == '0px'){
			$('.theme-option').css('right','-227px');
		}
	});

	$('.theme-option .light-dark-theme span').on('click', function(){
		$('.theme-option .light-dark-theme i').css('opacity','0');
		$(this).children('i').css('opacity','1');

		var dataValue = $(this).data('value');
		$('#light-dark').attr('href',dataValue);
	});

	$('.theme-option .colors-theme span').on('click', function(){
		$('.theme-option .colors-theme i').css('opacity','0');
		$(this).children('i').css('opacity','1');

		var dataValue = $(this).data('value');
		$('#colors').attr('href',dataValue);
	});

	/**** Magnific Popup ****/
	var groups = {};
	$('.section-portfolio .item-portfolio .work-popup').each(function() {
	  var id = parseInt($(this).attr('data-group'), 10);
	  
	  if(!groups[id]) {
	    groups[id] = [];
	  }
	  
	  groups[id].push( this );
	});
	
	$.each(groups, function() {
	  
	  $(this).magnificPopup({
	      type: 'image',
	      closeOnContentClick: true,
	      closeBtnInside: false,
	      gallery: { enabled:true }
	  })
	  
	});

	/**** WOW-ANIMATE ****/
	new WOW().init();

});

/**** LOADER ****/
$(window).on('load', function()
{
  $("body").css("overflow","auto");
  $(".loading-overlay, .loading-overlay").fadeOut();
});