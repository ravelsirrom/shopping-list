$( document ).ready(function() {
    // Handler for .ready() called.
    console.log("ready")
    $("#js-shopping-list-form").on("submit", function(event) { 
    event.preventDefault()
    const userInput = $(this).find('#shopping-list-entry');
    $("#shopping-list-entry").val();
    
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      $(this).closest('li').remove();
    });
    console.log("submit")
    console.log($("#shopping-list-entry").val())
    })
  });