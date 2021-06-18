$("body").keypress(function (e) {
  var key = e.which;
  if (key == 13) {
    // the enter key code
    $(".typing-text").css("display", "block");
  }
}) 