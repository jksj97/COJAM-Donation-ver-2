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
      $(".btn-pop01").on("click", function(){
        $("#pop01").show();
      });
      $("#pop01 .modal-wrapper .modal-inner .close").on("click", function(){
        $("#pop01").hide();
      });

});