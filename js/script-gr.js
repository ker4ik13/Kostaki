const scrollButton = document.querySelector('.scroll_button');
const scrollText = document.querySelector('.scroll_text');

scrollButton.addEventListener('click', () => {
	scrollText.classList.toggle('hidden');
	// Continue
	if (scrollButton.textContent === 'Να συνεχίσει...') {
		// Roll up
		scrollButton.textContent = 'Τυλίγω';
	} else {
		// Continue
		scrollButton.textContent = 'Να συνεχίσει...';
	}
});
