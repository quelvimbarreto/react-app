$(document).ready(function () {
  $("#principal").owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    loop: false,
    center: true,
    nav: false,
    items: 1,
  });

  $("#continuar__assistindo").owlCarousel({
    loop: false,
    margin: 15,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });

  $("#lancamentos").owlCarousel({
    loop: false,
    margin: 15,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });
});
