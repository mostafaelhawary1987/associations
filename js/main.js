  // Preloder
  $(window).on("load", function() {
    $("html").css("overflow-y", "auto");
    $(".preloader").fadeOut(400, function() {
      $(this).remove();
    });
  
 // Sidemenu 

 $("#nav-icon").click( function() {
    $('#nav-icon').toggleClass('nav-icon_open');
    $('.sidenav').toggleClass('open');
    $(this).toggleClass('open');   
    $('body').toggleClass('ovh');
});
$("#openNav").click( function() {

       
});

$(".closebtn,.overlay").click( function() {
    $('.sidenav').removeClass('open');
    $('.overlay').fadeOut();
    $('body').removeClass('ovh');
});



$('.slider-head-one').owlCarousel({
    autoplay: false,
    rtl: true,
    loop: false,
    dots:true,
    nav: true,
    items: 1,
    navText: ["<i class='fa fa-arrow-right'></i>","<i class='fa fa-arrow-left'></i>"],
});
$('.slider-head-two').owlCarousel({
    autoplay: false,
    rtl: true,
    loop: false,
    dots:true,
    nav: true,
    items: 1,
    navText: ["<i class='fa fa-arrow-right'></i>","<i class='fa fa-arrow-left'></i>"],
});
$('.slider-head-two-plus').owlCarousel({
    autoplay: false,
    rtl: true,
    loop: false,
    dots:true,
    nav: true,
    items: 1,
    navText: ["<i class='fa fa-arrow-right'></i>","<i class='fa fa-arrow-left'></i>"],
});

$('.service').owlCarousel({
    autoplay: false,
    rtl: true,
    margin:25,
    loop:false,
    nav: false,
    dots:false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        767: {
            items: 3
        },
        991: {
            items: 3   
        },
        1199: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
});
$('.gallery').owlCarousel({
    autoplay: false,
    rtl: true,
    loop:false,
    dots:false,
    margin: 0,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        767: {
            items: 3
        },
        991: {
            items: 3   
        },
        1199: {
            items: 4
        },
        1200: {
            items:4
        },
        1920: {
            items:5
        }
    }
});
$('.news-template-one').owlCarousel({
    autoplay: false,
    rtl: true,
    loop:false,
    dots:true,
    margin: 15,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        991: {
            items: 2   
        },
        992: {
            items: 3   
        },
        1199: {
            items: 3
        },
        1200: {
            items:3
        }
    }
});
$('.news-template-two').owlCarousel({
    autoplay: false,
    rtl: true,
    loop:false,
    dots:true,
    margin: 15,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        991: {
            items:2   
        },
        992: {
            items:3   
        },
        1199: {
            items: 3
        },
        1200: {
            items:3
        }
    }
});
$('.news-template-three').owlCarousel({
    autoplay: false,
    rtl: true,
    loop:false,
    dots:true,
    margin: 70,

    items:1,
    
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $('.top').addClass('fixedheader');
  } else {
    $('.top').removeClass('fixedheader');
  }
}

});
 /**************************Scrolltop js************************/
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:0},"1000");return false})})


 /**************************counter js************************/
 var a = 0;
 $(window).scroll(function() {

     var oTop = $('.statistics-number,header').offset().top - window.innerHeight;
     if (a == 0 && $(window).scrollTop() > oTop) {
         $('.number').each(function() {
             var $this = $(this),
                 countTo = $this.attr('data-count');
             $({
                 countNum: $this.text()
             }).animate({
                 countNum: countTo
             },

                        {

                 duration: 1000,
                 easing: 'swing',
                 step: function() {
                     $this.text(Math.floor(this.countNum));
                 },
                 complete: function() {
                     $this.text(this.countNum);
                     //alert('finished');
                 }

             });
         });
         a = 1;
     }

 });
 $(".down[data-toggle='collapse']").on('click', function() {
    $(this).parent().children('.collapse').collapse('toggle');
    $(this).parent().parent().siblings().find('.collapse.in').collapse('hide');
});

