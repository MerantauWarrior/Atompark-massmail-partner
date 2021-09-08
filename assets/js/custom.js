$(document).ready(function () {
  $('.header-lang__switch').click(function () {
    $(this).toggleClass('header-lang__switch_active');
    $('.header-lang__select').fadeToggle(250);
  });
})