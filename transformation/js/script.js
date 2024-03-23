$(document).ready(function(){
    $("button").click(function(){
      $("p").hide();
    });
  });

  $(document).ready(function(){
    $("div").dblclick(function(){
      $(this).toggleClass("changecolor");
    });
  });

  $(document).ready(function(){
    $("img").click(function(){
      $(this).animate({
        height: '+=20px',
        width: '+=20px'
      });
    });
  });