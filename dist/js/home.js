jQuery(document).ready(function(n){function t(e){return 0<=(e=parseInt(e))&&e<=9?"0"+e:e}setInterval(function(){var e;n("#deal-countdown").html((e=new Date)?t(23-e.getHours())+" : "+t(59-e.getMinutes())+" : "+t(59-e.getSeconds()):"")},1e3)});
//# sourceMappingURL=home.js.map
