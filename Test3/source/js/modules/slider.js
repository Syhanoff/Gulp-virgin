// module.exports = {


// }
// $(document).ready(function(){
//   $('.carousel__inner').slick({
//     infinite: true,
//     speed: 1000,
//     adaptiveHeight: true,
//     fade: true,
//     cssEase: 'linear',
//     prevArrow: '<button type="button" class="slick-prev"></button>',
//     nextArrow: '<button type="button" class="slick-next"></button>',
//     responsive: [
//       {
//         breakpoint: 991,
//         settings: {
//           dots: true,
//           arrows: false,
//           adaptiveHeight: false
//         }
//       }
//     ]
//   });
// });


function slider () {
  var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }
  ready(() => {
    $('.carousel__inner').slick({
      infinite: true,
      speed: 1000,
      adaptiveHeight: true,
      fade: true,
      cssEase: 'linear',
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            dots: true,
            arrows: false,
            adaptiveHeight: false
          }
        }
      ]
    });
  });
}

module.exports = slider;
