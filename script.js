const menuBtn = document.querySelector('header .fa-bars');
const menu = document.querySelector('nav');

menuBtn.addEventListener('click', () => menu.style.display = menu.style.display === 'block' ? 'none' : 'block');

$(document).ready(function(){
    $('.product-gallery').slick({
        slidesToShow: 5,
	    slidesToScroll: 1,
	    autoplay: true,
  	    autoplaySpeed: 2000,
    });
});