jQuery(document).ready(function(e){function o(n){return 0<=(n=parseInt(n))&&n<=9?"0"+n:n}setInterval(function(){var n;e("#deal-countdown").html((n=new Date)?o(23-n.getHours())+" : "+o(59-n.getMinutes())+" : "+o(59-n.getSeconds()):"")},1e3)}),$(".top_nav_li.dropdown,.menu.dropdown").hover(function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(10).fadeIn(500)},function(){$(this).find(".dropdown-menu").stop(!0,!0).delay(10).fadeOut(500)}),$(document).ready(function(){$(".share_popover").popover({html:!0,content:function(){return $("#popover_content_wrapper").html()}})});
//# sourceMappingURL=home.js.map
