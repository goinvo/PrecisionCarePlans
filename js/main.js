// primary js file for the care plan principle website

$(document).ready(function() {

  //check width of window and adjust navigation menu as appropriate
  var windowWidth = $(window).width();
  if (windowWidth > 730) {
    $(".header_links").css("display", "table-cell");
    $(".header_links").show();
  } else {
    $("#hamburger").show();
  }

  //hamburger dropdown for mobile width
  $("#hamburger").click(function() {
    $("#dropdown_menu").slideToggle("slow");
  });

});
