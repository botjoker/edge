$('document').ready(function(){


  $('#search-button').click(function(){
    $(this).toggleClass('open');
    if($(this).hasClass('open')) {
      $('.top-search').show();
      $('.main-menu').hide();
    } else {
      $('.top-search').hide();
      $('.main-menu').css('display', 'inline-block');
    }
  });

  $('.catalog__filter-current').click(function(){
    if($(this).parent().hasClass('open')) {
      $('.catalog__filter').removeClass('open');
    } else {
      $('.catalog__filter').removeClass('open');
      $(this).parent().addClass('open');
    }

  });

  $('.catalog__mob-panel-section').click(function(){
    $('.catalog__category-block').addClass('open');
  });

  $('.catalog__category-block-mob-close').click(function(){
    $('.catalog__category-block').removeClass('open');
  });

  $('.catalog__mob-panel-filters').click(function(){
    $('.catalog__filter-block').addClass('open');
  });
  $('.catalog__filter-block-mob-close').click(function(){
    $('.catalog__filter-block').removeClass('open');
  });

  $('.main-menu-mob__close').click(function(){
    $('.main-menu-mob').removeClass('open');
  });

  $('.main-menu-mob__item-hasChildren>a').click(function(){
    $(this).parent().toggleClass('open');
  });

  $('.mob-menu-button').click(function(){
    $('.main-menu-mob').toggleClass('open');
  });

  if ($(window).width() < 992) {
    $('.product__main-imgs').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      
    });
  }

});
