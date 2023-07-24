$(window).on("load", function () {
  //page loading
  $("body").addClass("is-loaded");
  //   slick carousel
  $(".featured__carousel").slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    infinite: true,
  });
  $(".tab__carousel").slick({
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: false,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    infinite: true,
  });
  AOS.init();
});

//Browser and OS defined class on body
$("body").addClass($.browser.platform);
$("body").addClass($.browser.name);
if ($.browser.desktop == true) {
  $("body").removeClass("mobile").removeClass("ipad").addClass("desktop");
}
if ($.browser.mobile == true) {
  $("body").removeClass("desktop").removeClass("ipad").addClass("mobile");
}
if ($.browser.ipad == true) {
  $("body").removeClass("mobile").removeClass("desktop").addClass("ipad");
}
if (
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 0) ||
  navigator.platform === "iPad"
) {
  $("body").removeClass("mobile").removeClass("desktop").addClass("ipad");
}

// Site related functions

//define a function
function example_function() {
  console.log("function called");
}

//call the function
example_function();
