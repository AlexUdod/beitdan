let btnToggle = document.querySelector('.header__toggle');

let wrapperUp = document.querySelector('.header__wrapper--up');
let wrapperNav = document.querySelector('.header__wrapper-inner--items');
// let logoName = document.querySelector('.logo__name');

let btnTelefone = document.querySelector('.header__contacts-min');
let btnSearch = document.querySelector('.header__search');
let contactsBlock = document.querySelector('.header__contacts');
let headerNav = document.querySelector('.header__nav');
let optionContainer = document.querySelector('.option-container');
let socialList = document.querySelector('.social-list');

let headerContactsBtn = document.querySelector('.header__contacts-btn');
let headerContactsWrapper = document.querySelector('.header__contacts-wrapper');
let hiddenTelNumber = document.querySelector('.header__contacts-tel--unactive');

let headerSearchText = document.querySelector('.header__search-text');

let desktopWidth = 1300;


btnToggle.onclick = function() {
	btnToggle.classList.toggle('header__toggle--active');
	wrapperUp.classList.toggle('header__wrapper--expanded');
	wrapperNav.classList.toggle('wrapper--expanded');
	// logoName.classList.toggle('logo__name--active');
	btnTelefone.classList.toggle('header__contacts-min--active');
	btnSearch.classList.toggle('header__search--active');
	contactsBlock.classList.toggle('header__contacts--active');
	headerNav.classList.toggle('header__nav--active');
	optionContainer.classList.toggle('option-container--active');
	socialList.classList.toggle('social-list--active');
};

btnTelefone.onclick = function() {
	contactsBlock.classList.add('header__contacts--full');
};

headerContactsBtn.onclick = function() {
	this.classList.toggle('header__contacts-btn--close');
	headerContactsWrapper.classList.toggle('header__contacts-wrapper--full-numers');
	hiddenTelNumber.classList.toggle('header__contacts-tel--unactive');
};

btnSearch.onclick = function() {
	headerSearchText.classList.toggle('header__search-text--visible');
};

window.addEventListener(`resize`, event => {	
	let viewportWidth = document.documentElement.clientWidth;
	if (viewportWidth >= desktopWidth ) {
		checkBtnTelAppearence();

		wrapperUp.classList.remove('header__wrapper--expanded');
		wrapperNav.classList.remove('wrapper--expanded');
		// logoName.classList.remove('logo__name--active');
		btnSearch.classList.remove('header__search--active');
		contactsBlock.classList.remove('header__contacts--active');
		headerNav.classList.remove('header__nav--active');
		optionContainer.classList.remove('option-container--active');
		socialList.classList.remove('social-list--active');

	} 
}, false);

function checkBtnTelAppearence () {
	let viewportWidth = document.documentElement.clientWidth;
	if (viewportWidth >= desktopWidth ) {
		btnTelefone.classList.remove('header__contacts-min--active');
	}
};
checkBtnTelAppearence();

document.onkeydown = function(evt) {
  if (evt.keyCode == 27) {
    contactsBlock.classList.remove('header__contacts--full');
    btnTelefone.classList.add('header__contacts-min--active');
  }
};

