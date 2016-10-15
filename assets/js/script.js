!function (t) {
   "use strict";

   //   t(".test").hide();
   var logo = t(".navbar-nav");
   t(window).scroll(function () {
      var scroll = t(window).scrollTop();
      if (scroll >= 50) {
         logo.css({
            marginTop: '10px',
            marginBottom: '10px',
            zIndex: 2500
         });
         //         t(".test").fadeIn();
      } else {
         logo.css({
            marginTop: '30px',
            marginBottom: '30px',
            zIndex: 1500
         });
      }
   });

   t(".box").hover(function(){
     $(this).toggleClass("disable");
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
