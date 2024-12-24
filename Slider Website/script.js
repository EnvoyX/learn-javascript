const slider = document.querySelector(`.slider`);
const listBackgroundImage = document.querySelector(`.list-background`);
const thumbnail = document.querySelector(`.thumbnail`);
const next = document.querySelector(`#next`);
const prev = document.querySelector(`#prev`);

// Autoplay Slider
// let runAutoPlay = setInterval(() => {
//   next.click();
// }, 5000);

let runAutoPlay = setTimeout(() => {
  next.click();
}, 5000);

next.addEventListener(`click`, () => {
  initSlider(`next`);
});

prev.addEventListener(`click`, () => {
  initSlider(`prev`);
});

const initSlider = (type) => {
  const sliderItems = listBackgroundImage.querySelectorAll(`.item`);
  const thumbnailItem = thumbnail.querySelectorAll(`.item`);
  if (type === 'next') {
    listBackgroundImage.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItem[0]);
    slider.classList.add('next');
  } else {
    const lastItemOrder = sliderItems.length - 1;
    listBackgroundImage.prepend(sliderItems[lastItemOrder]);
    thumbnail.prepend(thumbnailItem[lastItemOrder]);
    slider.classList.add('prev');
  }
  setTimeout(() => {
    slider.classList.remove('next');
    slider.classList.remove('prev');
  }, 2000);

  clearTimeout(runAutoPlay);

  runAutoPlay = setTimeout(() => {
    next.click();
  }, 5000);
};
