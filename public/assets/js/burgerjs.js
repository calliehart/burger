$(function() {


    $(".change-eaten").on("click", function(event) {
        var id = $(this).data("id");

    
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: {
              devoured: 1
          }
        }).then(
          function() {
            console.log("Burger devoured!!");
           
            location.reload();
          }
        );
      });

      $(".create-form").on("submit", function(event) {
        
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#burgerName").val().trim(),
          devoured: 0
        };
    
      
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            
            location.reload();
          }
        );
      });

});
