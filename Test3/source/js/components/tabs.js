$(document).ready(function(){
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-active)', function() {
    $(this)
      .addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
});
