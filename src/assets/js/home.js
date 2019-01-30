// Deal Countdown
jQuery(document).ready(function($){
  
  function zeroFill(digit) {
    var digit = parseInt(digit);
    if(digit >= 0 && digit <= 9) {
      return '0'+digit;
    }
    return digit;
  }

  function getFormattedDate(date) {
    if( !date ) {
      return "";
    }
    var hour = zeroFill(23 - date.getHours());
    var min = zeroFill(59 - date.getMinutes());
    var sec = zeroFill(59 - date.getSeconds());
    return hour+' : '+min+' : '+sec;
  }


  setInterval(function() {
    $('#deal-countdown').html(getFormattedDate(new Date()));
  }, 1000);

});
//-script for help in top nav
$('.on_hover_dropdown,.menu').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(10).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(10).fadeOut(500);
});
//-script for share option in product page.
$(document).ready(function(){
  $('.share_popover').popover({ 
    html : true,
    content: function() {
      return $('#popover_content_wrapper').html();
    }
  });
});
//--script for sticky menu
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("myHeader");
var sticky = navbar.offsetTop;

function myFunction() { 

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
//-script for login and register
$(".btn-reg").click(function(){
  $(".reg").removeClass('hidden');
  //-$('#loginBtn').addClass('hidden');
});
