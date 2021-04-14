$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $("header").addClass("header-scroll");
  }
  else {
    $("header").removeClass("header-scroll");
  }
});

$(document).ready(function() {
  $("#nav-more").click(function() {
    $("#more-ul").toggle("blind", 200);
    $("#nav-more").toggleClass("dropdown-active");
  });
  $("#m-nav").click(function() {
    $("nav").toggle("blind", 200);
    $("#m-nav-line1").toggleClass("m-nav-active");
    $("#m-nav-line2").toggleClass("m-nav-active");
    $("#m-nav-line3").toggleClass("m-nav-active");
  });

  /* OLD CODE - remove later */
  /*$("#article-experience").click(function() {
    $("#article-about").addClass("article-hidden");
    $("#article-experience").removeClass("article-hidden");
  });
  $("#article-about").click(function() {
    $("#article-experience").addClass("article-hidden");
    $("#article-about").removeClass("article-hidden");
  });*/
  $(".article-title").click(function() {
    $("#article-about").toggleClass("article-hidden");
    $("#article-experience").toggleClass("article-hidden");
  });

  $("#article-content-left li").click(function() {
    $(this).children("p").toggleClass("article-expanded");
  });
});
