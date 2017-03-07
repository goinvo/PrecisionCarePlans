// primary js file for the care plan principle website

$(document).ready(function() {

  $("#dropdown_menu").hide();
  $(".header_links").hide();

  //check width of window and adjust navigation menu as appropriate
  var windowWidth = $(window).width();
  if (windowWidth > 730) {
    $("#hamburger").hide();
    $(".header_links").show();
  }

  //hamburger dropdown for mobile width
  $("#hamburger").click(function() {
    $("#dropdown_menu").slideToggle("slow");
  });

});
