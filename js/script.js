$(document).ready(function() {

  // nav burger button display items
  $(function() {
      $('.toggleNav').on('click',function() {
      $('.mainNav').toggleClass('open');
    });
  });


  // burger nav slide down
  // $('.toggleNav').click(function() {
  //   var nav = $('.mainNav');
  //   nav.slideToggle(150);
  // })
  });


  // nav click scroll to section
  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


  // header fadein animation
  $('h1').waypoint(function(direction) {
    $('h1').addClass('animated bounceIn');
  }, {
    offset: '100%'
  });

  // project images animation
  $('.projectImage').waypoint(function(direction) {
    $('.projectImage').addClass('animated zoomIn');
  }, {
    offset: '90%'
  });


  // social icons bounce animation
  $('.fa').waypoint(function(direction) {
    $('.fa').addClass('animated zoomIn');
  }, {
    offset: '100%'
  });


});
