
$(window).scroll(function(){
    $(".viewport-1").css("opacity", 1 - $(window).scrollTop() / 250);
  });
