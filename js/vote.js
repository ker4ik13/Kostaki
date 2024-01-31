const yesButtons = document.querySelectorAll('.button_bottom[data-vote="yes"]');
const noButtons = document.querySelectorAll('.button_bottom[data-vote="no"]');
const closeButton = document.querySelector('[data-action="closeModal"]');
const modalText = document.querySelector('.modal_text');
const swiper = new Swiper('.swiper');

// Варианты ответов:

// Картина авангарда, пользователь ответил Да
// Hooray! This is a picture Название картины of Имя художника !

// Картина авангарда, пользователь ответил Нет
// Oh! it's a pity, it was a painting"...." it would have been perfect for Costakis' collection.

// Картина не авангарда, пользователь ответил Да
// Wrong! This is a picture Название картины of Имя художника !

// Картина не авангарда, пользователь ответил Нет
// Right! This is a picture Название картины of Имя художника !

yesButtons.forEach((button) => {
	button.addEventListener('click', () => {
		checkAnswer(button);
	});
});

noButtons.forEach((button) => {
	button.addEventListener('click', () => {
		checkAnswer(button);
	});
});

const toggleModal = () => {
	const modal = document.querySelector('.modal');
	modal.classList.toggle('open');
};

closeButton.addEventListener('click', () => {
	toggleModal();
	swiper.slideNext();
});

const checkAnswer = (button) => {
	if (button.value === 'true' && button.dataset.vote === 'yes') {
		modalText.textContent = `Hooray! This is a picture "${button.dataset.paint}" of ${button.dataset.author} !`;
		toggleModal();
	} else if (button.value === 'true' && button.dataset.vote === 'no') {
		modalText.textContent = `Correct! This is a picture "${button.dataset.paint}" of ${button.dataset.author}! We don't need it here.`;
		toggleModal();
	} else if (button.value === 'false' && button.dataset.vote === 'yes') {
		modalText.textContent = `Wrong! This is a picture "${button.dataset.paint}" of ${button.dataset.author} !`;
		toggleModal();
	} else if (button.value === 'false' && button.dataset.vote === 'no') {
		modalText.textContent = `Oh! it's a pity, it was a painting "${button.dataset.paint}" it would have been perfect for Costakis' collection.`;
		toggleModal();
	}
};
