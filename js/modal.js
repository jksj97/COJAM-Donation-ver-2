$( document ).ready(function() {
          //brand modal

          $(".brandclick-modal").click(function(){
            $(".container").addClass("brand-open");
          })
    
          $(".brand-close-modal").click(function(){
            $(".container").removeClass("brand-open");
          })
    
          $("#pay-box").click(function(){
            $(".modal").fadeIn();
          });
          
          $(".close-modal").click(function(){
            $(".modal").fadeOut();
          });

      //popUp
      $('a.btn-pop01').click(function(e)
      {
        e.preventDefault();   
      });
  

      $(".btn-pop01").on("click", function(){
        $("#pop01").show();
      });
      $("#close").on("click", function(){
        $("#pop01").hide();
      });

});