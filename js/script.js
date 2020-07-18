
$(document).ready(function() {

        if(document.documentElement.clientWidth < 815) {
   
      }
        
            else{
            $('#fullpage').fullpage({
            		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        				scrollOverflow: true,
               	resize : false,
                 autoScrolling:true,
				      navigation: true,
				      scrollingSpeed: 1000,
				      dragAndMove: true,
				      responsiveWidth: 768,
				      recordHistory: true,
				      normalScrollElements: '.page3__content-reviews, .galery.actives',
				      scrollHorizontally: true
     			 });
           }

   $('.slider').slick({
   	autoplay: true,
   	autoplaySpeed: 10000,
   	infinite: false,
   	
	});
	
	$('.galery_button, .button-help').click(function (event) {
		$('.galery').addClass('actives');
		$('.header, #fp-nav').addClass('opacity');
		$('body').addClass('lock');
		$('.galery_slider').slick({
   	
   	infinite: false,
   	fade: false
	});
}); 
	$('.galery_close').click(function (event) {
		$('.galery').removeClass('actives');
		$('.header, #fp-nav').removeClass('opacity');
		$('.galery_slider').slick('unslick');
		$('body').removeClass('lock');		
}); 
	$('.header_burger').click(function (event) {
		$('.burger,.burger_menu,.header_burger').toggleClass('active');
		$('body').toggleClass('lock');
		}); 
	$('.header_anchor1').click(function (event) {
		$('.burger,.burger_menu,.header_burger').removeClass('active');
		$('body').removeClass('lock');
		}); 
	$('.contacts-main').click(function (event) {
		$('.contacts-1,.contacts-2,.contacts-3,.contacts-main').toggleClass('active');
		$('body').toggleClass('active');
		}); 
});
       