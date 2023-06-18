
$(document).ready(function(){

$(".main").onepage_scroll({
   sectionContainer: "section", // это часть берет любой селектор если вы не хотите использовать секцию поставьте другой html тег
   easing: "cubic-bezier(0.175, 0.885, 0.420, 1.210)", // Опции плавности принимает только CSS3 свойства такие как "ease", "linear", "ease-in", "ease-out", "ease-in-out",или даже cubic bezier  "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000, // Анимация дает вам определить сколько вы хотите анимировать каждую секцию 
   pagination: true, // Вы также можете спрятать или показать пагинацию 
   updateURL: false, // 
   beforeMove: function(index) {}, // это опция принимает каллбек функцию и будет вызвано ДО того как страница начнет скроллитсья
   afterMove: function(index) {}, // это опция принимает каллбек функцию и будет вызвано ПОСЛЕ того как страница начнет скроллитсья
   loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   responsiveFallback: 600 //
   
   
});
});