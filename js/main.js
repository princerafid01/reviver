jQuery(document).ready(function ($) {
    if ($(window).width() < 1198 && $(window).width() > 990 )
    {
     $("#about img:odd").css("margin-bottom","-60px");
        
    }
    
    $("button.navbar-toggle").click(function(){
        $(this).toggleClass("active");
    });
    
    
        $(window).scroll(function() {
      if ($(this).scrollTop() > 1){  
        $('nav').addClass("sticky");
        $('nav ul.nav li a').addClass("bg");
        $('.navbar-brand img').addClass("imgo");
      }
      else{
        $('nav').removeClass("sticky");
        $('nav ul.nav li a').removeClass("bg");
        $('.navbar-brand img').removeClass("imgo");
      }
    });
    
    
    $('.hideWork').hide();
    $('.browse button').on("click" , function(){
        $('.hideWork').show(900);
        $('.browse').hide(900);
    });
    
    
    
    
    // Scrolling To Target DIV
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
      e.preventDefault();
      var target = this.hash,
      $target = $(target);

      $('html, body').stop().animate( {
        'scrollTop': $target.offset().top
      }, 500, 'swing', function () {
        window.location.hash = target;
      } );
    });
	
    
  
    $('#contact .container li:first-child').css("padding-top","0");
    
     $('.testimonial-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay:true,
      autoplaySpeed:3300,
      asNavFor: '.nav_control'
    });
    $('.nav_control').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.testimonial-slider',
      dots: true,
      focusOnSelect: true,
      arrows: false,
      loop:false
    });
    
    //Video popup
    $('.video-play-icon').magnificPopup({type:'video'});
    
});


