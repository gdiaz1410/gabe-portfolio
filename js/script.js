$(document).ready(function() {



  // nav burger button
  $(function() {
      $('.toggleNav').on('click',function() {
      $('.mainNav').toggleClass('open');
    });
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

  $('.toggleNav').click(function() {
    var nav = $('.mainNav');

    nav.slideToggle(200);
  })
  });

  $('.projectFlex').waypoint(function(direction) {
    $('.projectFlex').addClass('animated fadeIn');
  }, {
    offset: '90%'
  });








});
