jQuery(document).ready(function(e){function t(n){return 0<=(n=parseInt(n))&&n<=9?"0"+n:n}setInterval(function(){var n;e("#deal-countdown").html((n=new Date)?t(23-n.getHours())+" : "+t(59-n.getMinutes())+" : "+t(59-n.getSeconds()):"")},1e3)}),$(".on_hover_dropdown").hover(function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(10).fadeIn(500)},function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(10).fadeOut(500)}),$(document).ready(function(){$(".share_popover").popover({html:!0,content:function(){return $("#popover_content_wrapper").html()}})}),window.onscroll=function(){myFunction()};var navbar=document.getElementById("myHeader"),sticky=navbar.offsetTop;function myFunction(){window.pageYOffset>=sticky?navbar.classList.add("sticky"):navbar.classList.remove("sticky")}$(".btn-reg").click(function(){$(".reg").removeClass("hidden")});
//# sourceMappingURL=home.js.map
