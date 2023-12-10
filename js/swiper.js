const scrollButtons = document.querySelectorAll(".scroll_button");
const scrollTexts = document.querySelectorAll(".scroll_text");

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".my_button_next",
    prevEl: ".my_button_prev",
  },
});

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.previousElementSibling.classList.toggle("hidden");
    if (button.textContent === "continue...") {
      button.textContent = "roll up";
    } else {
      button.textContent = "continue...";
    }
  });
});
