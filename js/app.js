$(document).ready(function(){
	var mixer = mixitup('.gallery-container');
});

window.sr = ScrollReveal();
	

	sr.reveal('.gallery__item', {
		duration: 2000,
		origin: 'top',
		distance: '-400px',
		easing: 'ease',
		

	});

		sr.reveal('.process__item', {
		duration: 2000,
		origin: 'top',
		distance: '-400px',
		easing: 'ease',
		

	});

	sr.reveal('.description__title', {
		duration: 2000,
		origin: 'right',
		distance: '-150px',
		easing: 'ease',
	
	});

	sr.reveal('.description__subtitle', {
		duration: 2000,
		origin: 'right',
		distance: '-150px',
		easing: 'ease',
		delay: 10,

	});


		sr.reveal('.description__text', {
		duration: 2000,
		origin: 'right',
		distance: '-150px',
		easing: 'ease',	
		delay: 20,
	});



	sr.reveal('.rp__itemQ', {
		duration: 2000,
		origin: 'top',
		distance: '-300px',
		easing: 'ease',


	});

	sr.reveal('.rp__itemA', {
		duration: 2000,
		origin: 'top',
		distance: '-300px',
		easing: 'ease',
		delay: 600,

	});

		sr.reveal('.rp__itemB', {
		duration: 2000,
		origin: 'top',
		distance: '-300px',
		easing: 'ease',
		delay: 800,

	});

		sr.reveal('.rp__itemC', {
		duration: 2000,
		origin: 'top',
		distance: '-300px',
		easing: 'ease',
		delay: 1000,

	});


		sr.reveal('.about__col1',{
		duration: 1900,
		origin: 'top',
		distance: '-200px',
		easing: 'ease',
	
	});

		sr.reveal('.about__col2',{
		duration: 1900,
		origin: 'bottom',
		distance: '-200px',
		easing: 'ease',
	
	});


window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0)
});

var lastScrollTop = 0;
	navbar = document.getElementById("header");
window.addEventListener("scroll", function(){
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop){
		navbar.style.top="-80px";
	}else{

		navbar.style.top="0px"
		navbar.style.display="flex";
	}
	lastScrollTop = scrollTop;
});

 $(document).ready(function(){
	var mixer = mixitup('.process__grid');
});

$(document).ready(function(){
	$(".counter").counterUp({
		delay: 20,
		time: 850,
	});
});

const menu = document.querySelector(".header__list");
const openMenuBtn = document.querySelector(".header__openmenu");
const closeMenuBtn = document.querySelector(".header__closemenu");

function toggleMenu() {
	menu.classList.toggle("header__openedmenu")
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

$(".gallery__title").click( function() {
  window.location.href="proyect.html";
 });

$(".gallery__text--post1").click( function() {
  window.location.href="proyect.html";
 });

$(".gallery__post9--mobile").click( function() {
  window.location.href="proyect.html";
 });