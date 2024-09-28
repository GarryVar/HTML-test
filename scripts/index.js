$(window).on("load resize", () => {
  if ($(window).width() < 767) {
    $(".slider:not(.slick-initialized)").slick({
      dots: true,
      arrows: false,
    });
  } else {
    $(".slider.slick-initialized").slick("unslick");
  }
});
