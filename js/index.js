$(window).scroll(()=>{
    let wscroll = $(window).scrollTop();
  let Aoffcet = $("#About").offset().top;
  if(wscroll > Aoffcet-550)
  {
      $(".navbar").css({"backgroundColor":"#33211D" }) ;
      $(".navbar").removeClass('py-4');
      $(".back").fadeIn(500);
        $(".back").css("display" , "flex");


  }else
  {
    $(".navbar").css("backgroundColor" , "transparent");
    $(".navbar").addClass('py-4');
    $(".back").fadeOut(500);
  }
})
$(document).ready(()=>{
  $('.loading').fadeOut(1000 ,()=>{
    $('body').css("overflow-y" , "auto")
  });
  $(".owl-carousel").owlCarousel({loop:true , mouseDrag :true ,touchDrag: true,items:4 });
});

$(".back").click(()=>{
  $("html , body").animate({scrollTop:'0'} ,200)
})