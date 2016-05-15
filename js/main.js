
$(window).scroll(function(){
  var scroll = $(window).scrollTop();
  var scrollEffect = $('#scroll-effect');
  var nonScrollEffect = $('#non-scroll');
  
  if (scroll >= 30) {

    $(nonScrollEffect).slideUp(500);
    $(scrollEffect).slideDown(1000);

  }

  $('.dropdown').hover(function(){
    $('.dropdown-content').slideDown(1000);
  })
  

  
});

