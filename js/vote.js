const yesButtons = document.querySelectorAll('.button_bottom[data-vote="yes"]');
const noButtons = document.querySelectorAll('.button_bottom[data-vote="no"]');
const closeButton = document.querySelector('[data-action="closeModal"]');
const modalText = document.querySelector('.modal_text');

// Варианты ответов:

// Картина авангарда, пользователь ответил Да
// Right! This is a picture Название картины of Имя художника !

// Картина авангарда, пользователь ответил Нет
// Wrong! This is a picture Название картины of Имя художника !

// Картина не авангарда, пользователь ответил Да
// Wrong! This is a picture Название картины of Имя художника !

// Картина не авангарда, пользователь ответил Нет
// Right! This is a picture Название картины of Имя художника !

yesButtons.forEach((button) => {
	button.addEventListener('click', () => {
		checkAnswer(button);
		toggleModal();
	});
});

noButtons.forEach((button) => {
	button.addEventListener('click', () => {
		checkAnswer(button);
		toggleModal();
	});
});

const toggleModal = () => {
	const modal = document.querySelector('.modal');
	modal.classList.toggle('open');
};

closeButton.addEventListener('click', toggleModal);

const checkAnswer = (button) => {
	if (button.value === 'false') {
		modalText.textContent = `Wrong! This is a picture ${button.dataset.paint} of ${button.dataset.author} !`;
	} else {
		modalText.textContent = `Right! This is a picture ${button.dataset.paint} of ${button.dataset.author} !`;
	}
};
