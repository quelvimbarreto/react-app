//SLIDER 1
const carousel = new Swiper(".carousel", {
  // Optional parameters
  slidesPerView: 1,
  direction: "horizontal",
  loop: true,
  spaceBetween: 30,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

// SLIDER 2

const largura = function () {
const janela = window.innerWidth;

  if (janela > 1200) {
    const cardSlider = new Swiper(".cardSlider", {
      // Optional parameters
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else if (janela > 500) {
    const cardSlider = new Swiper(".cardSlider", {
      // Optional parameters
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    const cardSlider = new Swiper(".cardSlider", {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
};
largura();
//RESIZE

const addEvent = function (elem, type, eventHandle) {
  if (elem == null || typeof elem == "undefined") return;
  if (elem.addEventListener) {
    elem.addEventListener(type, eventHandle, false);
  } else if (elem.attachEvent) {
    elem.attachEvent("on" + type, eventHandle);
  } else {
    elem["on" + type] = eventHandle;
  }
};

addEvent(window, "resize", function () {
  largura();
});
