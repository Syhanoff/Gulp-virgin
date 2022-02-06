$(document).ready(function(){
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $("a[href=#promo]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
});
