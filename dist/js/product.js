jQuery(document).ready(function(r){r("#product-img").elevateZoom({zoomType:"inner",cursor:"crosshair",gallery:"product-img-gal",galleryActiveClass:"active"});var t=r("#product-img-gal").html();r("#product-img-slider").append(t),r("#product-img-slider").slick({prevArrow:'<span class="fa fa-chevron-left slide-back"></span>',nextArrow:'<span class="fa fa-chevron-right slide-next"></span>',arrows:!0,slidesToShow:1,slidesToScroll:1});var l=r(".product-details-section .extra-options"),n=!0,d=r(".product-details-section");function p(t){return t?parseFloat(t.replace("px")):0}r(window).scroll(function(){var t=r(window).scrollTop(),s=p(d.css("height")),i=p(l.css("height")),o=r(window).width();if(!(Math.abs(s-i)<300)){var a,c,e=d[0].offsetTop+s-i;o<=991?l.css("position","static").css("top",0):460<=t&&t<=e?(a=p(r(".product-details-section .container").css("width")),c=(r(window).width()-a)/2+a-p(l.css("width"))-3,l.css("max-width",l.css("width")),l.css("position","fixed").css("top",10).css("left",c),n=!0):n&&(l.css("position","static").css("top",0),n=!1)}}),r(document).on("click",".product-details-section .toggle-details",function(){r(this).hasClass("fa-plus-circle")?(r(this).removeClass("fa-plus-circle"),r(this).addClass("fa-minus-circle")):(r(this).addClass("fa-plus-circle"),r(this).removeClass("fa-minus-circle"))}),r(document).on("change","#product-quantity-input",function(){var t=r(this).val();isNaN(t)&&(t=1,r(this).val(t));var s=r(this).attr("data-target"),i=parseFloat(r(s).attr("data-unit-price"))*t;r(s).attr("data-total",i),r(s).val(kb_shop_currency_symbol+new Number(i).toLocaleString())}),r(window).width()<=767&&(r(".product-page-content .product-details-section .footer-col .title .fa").trigger("click"),r(document).on("click",".product-page-content .product-details-section .footer-col .title .fa",function(){r(r(this).data("target")).collapse("toggle")}))});
//# sourceMappingURL=product.js.map
