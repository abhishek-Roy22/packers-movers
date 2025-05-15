const counters = document.querySelectorAll('.counter');
const speed = 100;

const startCounters = () => {
  counters.forEach((counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const updateCount = () => {
      const increment = target / speed;

      if (count < target) {
        count += Math.ceil(increment);
        counter.innerText = count;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
};

// Start counter animation when section is in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounters();
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(document.querySelector('#stats-section'));

$(document).ready(function () {
  $('.google-testimonial').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
      },
      600: {
        items: 3,
        nav: false,
        loop: true,
      },
      1000: {
        items: 3,
        nav: false,
        loop: false,
      },
    },
  });
});
