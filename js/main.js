// *** Header Search part
let headerSearch = document.querySelector('.header-search-window');

function startSearch() {
  headerSearch.style.width = '85%';
}

function endSearch() {
  headerSearch.style.width = '0%';
}




// *** Testimonial slider
$('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  // * left arrow
    prevArrow: '<button type="button" class="testimonial-slick-arrow slick-prev-arrow"><img src="./images/font-awesome/arrow-left-solid.svg"></button>',

  // * right arrow
    nextArrow: '<button type="button" class="testimonial-slick-arrow slick-next-arrow"><img src="./images/font-awesome/arrow-right-solid.svg"></button>',

    dots: false,
    loop: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5555,
    responsive: [
      {
        breakpoint: 1275,
        settings: {
          // slidesToShow: 3,
          // slidesToScroll: 3,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });