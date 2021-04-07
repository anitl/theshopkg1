const mySwiper = new Swiper('.swiper-container', {
	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button-next',
		prevEl: '.slider-button-prev',
	},
});



const buttonCart = document.querySelector('.button-cart');
const modalCart = document.querySelector('#modal-cart');
const modalClose = document.querySelector('.modal-close');

const openModal = function() {
	modalCart.classList.add('show');
	// console.log("hello world!!!");
};


const closeModal = function() {
	modalCart.classList.remove('show');
};

buttonCart.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);



(function() {
	const scrollLink = document.querySelector('a.scroll-link');

	for (let i = 0; i < scrollLink.length; i++) {
		scrollLink[i].addEventListener('click', function(event){
			event.preventDefault();
			const id = scrollLink[i].getAttibute('href');
			document.querySelector(id).scrollIntoView({
				behavior:'smooth',
				block: 'start',
			})
		});
	}
	
})();




