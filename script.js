$(document).ready(function() {

  $("#hideBtn").click(function() {
    $("#box").toggle();
  });

  $("#fadeBtn").click(function() {
    $("#box").fadeToggle();
  });

  $("#textBtn").click(function() {
    $("#box").text("Text has been changed!");
  });

  $("#submitBtn").click(function() {
    let name = $("#nameInput").val();
    $("#output").text("Hello " + name);
  });

});