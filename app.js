const slideLeft = document.querySelectorAll('.slide-left');
const slideRight = document.querySelectorAll('.slide-right');
const btnVideo = document.querySelectorAll('.btn-video');
const btnCarousel = document.querySelectorAll('.slider-nav');
const btnNotFunctional = document.querySelectorAll('.non-functional-btn');

const featureMessage = document.getElementById('features-message');
const btnClose = document.querySelector('.btn-close');

const listenerArray = [
  slideLeft,
  slideRight,
  btnVideo,
  btnCarousel,
  btnNotFunctional,
];

listenerArray.forEach((listener) => {
  if (listener != null) {
    listener.forEach((btn) => {
      btn.addEventListener('click', displayMessage);
    });
  }
});

btnClose.addEventListener('click', closeMessage);

function displayMessage() {
  featureMessage.classList.add('active');
}

function closeMessage() {
  featureMessage.classList.remove('active');
}
