$(function () {
  AOS.init({
    duration: 1000,
    once: true
  });

  $(".navbar-toggler").on("click", function () {
    $(".collapse").toggleClass("show");
    $("body").toggleClass("layer-open");
    $(".navbar-close").show();
  });
  $(".navbar-close").on("click", function () {
    $(".collapse").toggleClass("show");
    $(".navbar-close").hide();
    $("body").toggleClass("layer-open");
    // $(header).toggleClass("sticky-not");
    $(".dark-overlay").click(function () {
      $(".collapse").removeClass("show");
      $("body").removeClass("layer-open");
    });
  });

  $(function () {
    blankImagesArray = [
      "assets/images/mine/Newsely-images/administration.jpg",
      "assets/images/mine/Newsely-images/archive-gliwice.jpg",
      "assets/images/mine/Newsely-images/black-and-white.jpg",
      "assets/images/mine/Newsely-images/img1.jpg",
      "assets/images/mine/Newsely-images/img2.jpg",
      "assets/images/mine/Newsely-images/img3.jpg",
      "assets/images/mine/Newsely-images/img4.jpg",
      "assets/images/mine/Newsely-images/img5.png",
      "assets/images/mine/Newsely-images/img6.jpg",

    ];
    const img = $("img");

    for (let i = 0; i < img.length; i++) {
      if ($(img[i]).attr('src').toString().length === 0 ||
        ($(img[i]).attr('src').toString() === 'alt="thumb"')) {
        $(img[i]).attr('src', blankImagesArray[Math.floor(Math.random() * blankImagesArray.length)]);
      }
      $(img[i]).attr('width', "100%");
    }

  });
});







