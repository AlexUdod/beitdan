let slider = document.querySelector('.slider__list');
let paginatorsContainer = document.querySelector('.slider__pagitators-container');
let slids = [].slice.call(document.querySelectorAll('.slider__item'));
let paginators = [].slice.call(document.querySelectorAll('.slider__paginator'));
let paginatorActive = 'slider__paginator--active';
let slidActive = 'slider__item--active';

let rightBtn = document.querySelector('.slider__arrow--right');
let leftBtn = document.querySelector('.slider__arrow--left');


paginatorsContainer.onclick = function(event) {
	removeClass (paginators, paginatorActive);
	removeClass (slids, slidActive);
	let pag = event.target.closest('button');
	if(!pag) return; 
	if(!paginatorsContainer.contains(pag)) return;

	pag.classList.add(paginatorActive);
	let index = findActivePaginator(paginators);
	slids[index].classList.add(slidActive);
};

rightBtn.addEventListener('click', function() {
	let index = findActivePaginator(paginators);
	removeClass (paginators, paginatorActive);
	removeClass (slids, slidActive);
	if (index === (paginators.length - 1)) {
		index = -1;
	}
	paginators[index + 1].classList.add(paginatorActive);
	slids[index + 1].classList.add(slidActive);
});

leftBtn.addEventListener('click', function() {
	let index = findActivePaginator(paginators);
	removeClass (paginators, paginatorActive);
	removeClass (slids, slidActive);
	if (index === 0) {
		index = (paginators.length);
	}
	paginators[index - 1].classList.add(paginatorActive);
	slids[index - 1].classList.add(slidActive);
});

function removeClass (arr, clas) {
	arr.forEach(function(elem) {
		elem.classList.remove(clas);
	})
};

function findActivePaginator (arr) {
	let item = 0;
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].classList.contains('slider__paginator--active')) {
		 item = i;
		 break;
		};		
	};
	return item;
};

