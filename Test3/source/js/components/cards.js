// $(document).ready(function(){
//   function toggleCard (item) {
//     $(item).each(function(i) {
//       $(this).on('click', function(e) {
//         e.preventDefault();
//         $('.catalog-item__box').eq(i).toggleClass('catalog-item__box_active')
//       })
//     })
//   }

//   toggleCard ('.catalog-item__link-list');
//   toggleCard ('.catalog-item__link-back');
// });


export function cards() {
  var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }
  ready(() => {
    function toggleCard (item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__box').eq(i).toggleClass('catalog-item__box_active')
        })
      })
    }

    toggleCard ('.catalog-item__link-list');
    toggleCard ('.catalog-item__link-back');
  });
}
