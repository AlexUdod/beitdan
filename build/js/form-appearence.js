let pageContentForm = document.querySelector('.page-content__form');
let pageContentDarkWrapper = document.querySelector('.page-content__dark-wrapper');
let btnCloseForm = document.querySelector('.page-content__form-close');
let btnOpenForm = document.querySelector('.kindergarten-page__link-form');

btnOpenForm.onclick = function(evt) {
	evt.preventDefault();
	pageContentForm.classList.add('page-content__form--active');
	pageContentDarkWrapper.classList.add('page-content__dark-wrapper--active');
};

btnCloseForm.onclick = function() {
	pageContentForm.classList.remove('page-content__form--active');
	pageContentDarkWrapper.remove('page-content__dark-wrapper--active');
};