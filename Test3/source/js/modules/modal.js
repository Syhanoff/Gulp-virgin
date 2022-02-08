$(document).ready(function(){
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #modal-consultation').fadeIn('slow');
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #modal-consultation, #modal-order, #modal-thanks').fadeOut('slow');
  });
  $('.catalog-item__btn').each(function(i) {
    $(this).on('click', function() {
      $('#modal-order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #modal-order').fadeIn('slow');
    });
  })
});
