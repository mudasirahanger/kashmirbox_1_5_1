jQuery(document).ready(function(t){function e(n){return 0<=(n=parseInt(n))&&n<=9?"0"+n:n}setInterval(function(){var n;t("#deal-countdown").html((n=new Date)?e(23-n.getHours())+" : "+e(59-n.getMinutes())+" : "+e(59-n.getSeconds()):"")},1e3)}),$(".on_hover_dropdown").hover(function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(10).fadeIn(500)},function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(10).fadeOut(500)}),$(document).ready(function(){$(".share_popover").popover({html:!0,content:function(){return $("#popover_content_wrapper").html()}})}),window.onscroll=function(){myFunction()};var navbar=document.getElementById("myHeader"),sticky=navbar.offsetTop;function myFunction(){window.pageYOffset>=sticky?navbar.classList.add("sticky"):navbar.classList.remove("sticky")}
//# sourceMappingURL=home.js.map
