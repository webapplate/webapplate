// the DOM has been localized and the user sees it in their language
document.addEventListener('DocumentLocalized', function() {
	document.body.classList.remove('hidden');
	// YourApp.init();
});