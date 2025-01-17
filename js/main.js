



const slider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  autoplayTimeout: 3000,
  controls: false, // Hide default controls
  nav: false, // Hide default navigation
  autoplayButtonOutput: false,
  speed: 500,
  gutter: 20, // Espaçamento entre os slides
  responsive: {
      640: { items: 2 },
      1024: { items: 3 }
  }
});

// Custom navigation buttons
document.querySelector('.prev').addEventListener('click', () => slider.goTo('prev'));
document.querySelector('.next').addEventListener('click', () => slider.goTo('next'));


const slides = document.querySelectorAll('.slide');
const progressBars = document.querySelectorAll('.progress-bar');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  progressBars.forEach((bar, i) => {
    bar.querySelector('::after').style.width = i === index ? '100%' : '0%';
  });
}

function nextSlide() {
  progressBars[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000);
