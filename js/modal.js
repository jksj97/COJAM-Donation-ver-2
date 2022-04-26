$( document ).ready(function() {
          //brand modal

          $(".brandclick-modal").click(function(){
            $(".container").addClass("brand-open");
          })
    
          $(".brand-close-modal").click(function(){
            $(".container").removeClass("brand-open");
          })
    
          console.log( "ready!" );


      //pay modal
      $(".pay-box").click(function(){
        $(".modal").fadeIn();
      });
      
      $(".close-modal").click(function(){
        $(".modal").fadeOut();
      });
});