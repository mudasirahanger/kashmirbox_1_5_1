// counter input
jQuery(document).ready(function($){

  $(document).on('click', '.counter-input .increment', function(){
    var input = $(this).closest('.counter-input').find('input');
    var inputVal = parseFloat(input.val());
    if(isNaN(inputVal)) {
      input.val(1);
    } else {
      input.val(inputVal+1);
    }
    input.trigger('change');
  });

  $(document).on('click', '.counter-input .decrement', function(){
    var input = $(this).closest('.counter-input').find('input');
    var inputVal = parseFloat(input.val());
    if(isNaN(inputVal)) {
      input.val(1);
    } else {
      if(inputVal > 1)
        input.val(inputVal-1);
    }
    input.trigger('change');
  });

  $(document).on('change', '.counter-input input', function(){
    var inputVal = $(this).val();
    if(isNaN(inputVal) || inputVal <= 0) { 
      $(this).val(1);
      $(this).trigger('change');
    }
  });

});
//hero slider 
jQuery(document).ready(function($) {
   $('.hero-slider').slick({
    dots : true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  });
});
//testimonial
jQuery(document).ready(function($) {
   $('.testimonial-slider').slick({
    dots : true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  });
});
//trending_in_craft_slider
jQuery(document).ready(function($){
  $('.trending_in_craft_slider').slick({
    'prevArrow' : '<span class="fa fa-chevron-left slide-back"></span>',
    'nextArrow' : '<span class="fa fa-chevron-right slide-next"></span>',
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 400,
        settings: {
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
});
/*******************************************************************************
Global Helper Functions
********************************************************************************/

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


