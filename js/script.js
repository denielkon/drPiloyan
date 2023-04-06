const input = document.querySelectorAll('form input');
const label = document.querySelectorAll('form label');
const popup = document.querySelectorAll('.overlay')[0];
const overlay = document.querySelectorAll('.overlay')[0];
const player = document.querySelector("lottie-player");
const slider = document.querySelector(".slider");
const sliderText = document.querySelectorAll(".slider p");

$(document).ready(function() {

   if(document.documentElement.clientWidth > 815) {
        $('#fullpage').fullpage({
            anchors: ['main', 'about', 'specialization', 'сontacts'],
        		scrollOverflow: true,
            resize : false,
            autoScrolling:true,
				navigation: true,
				scrollingSpeed: 1000,
				dragAndMove: true,
				responsiveWidth: 768,
				recordHistory: true,
				normalScrollElements: '.page3__content-reviews, .galery.actives, .overlay',
				scrollHorizontally: true
     		});
      }
   $('.slider').slick({
   	autoplay: true,
   	autoplaySpeed: 10000,
   	infinite: false,
   	
	});
	
	$('.galery_button').click(function (event) {
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
	$('.header_anchor1,.reg_menu').click(function (event) {
		$('.burger,.burger_menu,.header_burger').removeClass('active');
		$('body').removeClass('lock');
		}); 
	$('.contacts-main').click(function (event) {
		$('.contacts-1,.contacts-2,.contacts-3,.contacts-4,.contacts-main').toggleClass('active');
	}); 
	
	$('#button').click(function (event) {
		let checkForm = true;
		if (!$('#input1').val()) {
			checkForm = false;
			$('#input1').addClass('error');
			$('#label1').addClass('active');
		}
		if (!$('#input2').val()) {
			checkForm = false;
			$('#input2').addClass('error');
			$('#label2').addClass('active');
		}
		if (($('#input2').val().length !== 16) && ($('#input2').val().length > 2)) {
			checkForm = false; 
			$('#input2').addClass('error');
			$('#label2').addClass('active');;
			$('#label2').text('Неверный формат');
		}
		if (checkForm) {		
			event.preventDefault();
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: $("input").serialize()
				}).fail(function () {
					$('#animation').hide();
					$('.overlay').fadeIn();
					$("form").trigger("reset");
					$('.error').fadeIn();
					$('.pop-up_form h2').text('Что-то не так'); 
					$('.pop-up_form h3').text('Попробуйте позже или свяжитесь с моим помощником');
					$('.pop-up_form button').text('Хорошо'); 
				}).done(function () {
					$('.error').hide();
					$('.overlay').fadeIn();
					$('#animation').fadeIn();
					player.load("https://assets3.lottiefiles.com/packages/lf20_yvli2ph8.json");
					$('.pop-up_form h2').text('Отлично!'); 
					$('.pop-up_form h3').text('Мой помощник свяжется с вами в ближайшее время');
					$('.pop-up_form button').text('Хорошо, буду ждать');
					$(this).find("input").val("");
					$("form").trigger("reset");
					$('body').addClass('lock'); 
				});
			return false; 
		}
	});
	
	$('.pop-up_close').click(function() {
		$('.overlay').fadeOut();
		$('body').removeClass('lock');
	});
});

input[1].addEventListener('input', function () {
   let x = input[1].value;
   x = x.replace(/^\+7 /, '');
   x = x.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
   x = !x[2] ? x[1] : x[1] + ' ' + x[2] + (x[3] ? `-${x[3]}` : '') + (x[4] ? `-${x[4]}` : '');
   x = x.startsWith('+7 ') ? x : '+7 ' + x;
   input[1].value = x;
});

input[0].addEventListener("focus", function () {
   label[0].classList.remove('active');
   input[0].classList.remove('error');
})
input[1].addEventListener("focus", function () {
   label[1].classList.remove('active');
   input[1].classList.remove('error');
})
document.onclick = function (e) {
	if (e.target.className === "overlay") {
		popup.style.display = 'none';
   };
};
const lineNumber = Math.floor((slider.clientHeight - 49) / 20 - 1);
sliderText.forEach(item => item.style.webkitLineClamp = lineNumber);
