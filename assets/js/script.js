!function (t) {
   "use strict";
   var nav = t(".navbar-nav"),
       logo = t(".logo-position");
   t(window).scroll(function () {
      var scroll = t(window).scrollTop();
      if (scroll >= 100) {
          nav.addClass('scrolling');
          logo.addClass('transform');
      } else {
         nav.removeClass('scrolling');
         logo.removeClass('transform');
      }
   });

   t(".box").hover(function () {
     t(this).toggleClass("disable");
     if (t(this).hasClass("box-green")) {
         t(this).toggleClass("segment-arrow-green");
      } else if (t(this).hasClass("box-black")) {
         t(this).toggleClass("segment-arrow-black");
      } else if (t(this).hasClass("box-orange")) {
         t(this).toggleClass("segment-arrow-orange");
      }
   });


   t("a.page-scroll").bind("click", function (a) {
      var o = t(this);
      t("html, body").stop().animate({
         scrollTop: t(o.attr("href")).offset().top - 50
      }, 1250, "easeInOutExpo"), a.preventDefault()
   }), t("body").scrollspy({
      target: ".navbar-fixed-top",
      offset: 51
   }), t(".navbar-collapse ul li a").click(function () {
      t(".navbar-toggle:visible").click()
   })

}(jQuery);
