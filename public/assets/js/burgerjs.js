$(function() {


    $(".change-eaten").on("click", function(event) {
        var id = $(this).data("id");

    
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: {
              devoured: true
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
          name: $("#name").val().trim(),
          devoured: false
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
