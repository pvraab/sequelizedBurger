// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".dropdown-toggle").dropdown();

  $("#customerMenu").on("click", ".dropdown-item", function() {
    // console.log("Dropdown");
    // console.log($(this));
    // console.log($(this).html());
    // console.log($(this).data("id"));
    var id = $(this).data("id");
    localStorage.clear();
    localStorage.setItem("id", id);
    $("#customerSelected").val($(this).html());
  });

  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    console.log("Changed devoured to ", newDevoured);
    if (newDevoured) {
      var newDevouredState = {
        isDevoured: false
      };
    } else {
      var newDevouredState = {
        isDevoured: true
      };
    }

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
      console.log("Changed devoured to", newDevoured);

      // Create customer burger row
      var cid = localStorage.getItem("id");
      console.log("In put route");
      console.log(cid);
      var newCB = {
        burgerId: id,
        customerId: cid
      };
      $.post("/api/customers/burgers", newCB, function(data) {
        if (data) {
          console.log("Added a new customer burger");
          // Reload the page to get the updated list
          location.reload();
        } else {
          alert("Did not work");
        }
      });
  
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burgerName: $("#burgerAdd")
        .val()
        .trim(),
      isDevoured: false
    };

    $.post("/api/burgers", newBurger, function(data) {
      if (data) {
        console.log("Added a new burger");
        // Reload the page to get the updated list
        location.reload();
      } else {
        alert("Did not work");
      }
    });
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("Deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
