$( document ).ready(function() {
          //brand modal

          $(".brandclick-modal").click(function(){
            $(".container").addClass("brand-open");
          })
    
          $(".brand-close-modal").click(function(){
            $(".container").removeClass("brand-open");
          })
    
          console.log( "ready!" );


    $('.js-click-modal').click(function(){
        $('.modal-container').addClass('modal-open');
      });
      
      $('.js-close-modal').click(function(){
        $('.modal-container').removeClass('modal-open');
      });


      //pay modal
      $(".pay-box").click(function(){
        $(".modal").fadeIn();
      });
      
      $(".close-modal").click(function(){
        $(".modal").fadeOut();
      });
});