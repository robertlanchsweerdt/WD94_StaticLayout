const slideLeft = document.querySelectorAll('.slide-left');
const slideRight = document.querySelectorAll('.slide-right');
const btnVideo = document.querySelectorAll('.btn-video');
const btnCarousel = document.querySelectorAll('.slider-nav');
const btnNotFunctional = document.querySelectorAll('.non-functional-btn');

const sliderMessage = document.getElementById('slider-message');
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
      btn.addEventListener('click', carouselMessage);
    });
  }
});

btnClose.addEventListener('click', closeMessage);

function carouselMessage() {
  sliderMessage.classList.add('active');
}

function closeMessage() {
  sliderMessage.classList.remove('active');
}
