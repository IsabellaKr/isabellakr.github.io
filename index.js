
var color = "#212529";

setTimeout(function () {
  $("#arrow-1").removeClass("arrow-bounce-in");
  $("#arrow-1").addClass("arrow-wobble");
}, 6000);

setTimeout(function () {
  $("#arrow-2").removeClass("arrow-bounce-in");
  $("#arrow-2").addClass("arrow-wobble");
}, 6000);

$("#mode-switch").change(function(){
    if(this.checked == true) {
        $("body").addClass("dark-mode");
        $("h1").addClass("dark-mode-text");
        $("h2").addClass("dark-mode-text");
        $("p").addClass("dark-mode-text");
        $("i").addClass("dark-mode-text");
        $("#arrow").addClass("dark-mode-text");
        $(".nav-link").addClass("dark-mode-text");
        $(".card").addClass("dark-mode-card");
        $(".highlighter").addClass("dark-mode-highlighter");
        $(".hr-title").addClass("dark-mode-hr-title");
        $(".about-me-title").addClass("dark-mode-slogan");
        $(".jquery-icon").addClass("dark-mode-jquery-icon");
        color = "white";
        $(".title").css("color", color);
        $(".company-name").css("color", color);
    } else {
        $("body").removeClass("dark-mode");
        $("h1").removeClass("dark-mode-text");
        $("h2").removeClass("dark-mode-text");
        $("p").removeClass("dark-mode-text");
        $("i").removeClass("dark-mode-text");
        $("#arrow").removeClass("dark-mode-text");
        $(".nav-link").removeClass("dark-mode-text");
        $(".card").removeClass("dark-mode-card");
        $(".highlighter").removeClass("dark-mode-highlighter");
        $(".hr-title").removeClass("dark-mode-hr-title");
        $(".about-me-title").removeClass("dark-mode-slogan");
        $(".jquery-icon").removeClass("dark-mode-jquery-icon");
        color = "#212529";
        $(".title").css("color", color);
        $(".company-name").css("color", color);
    }
});


$(".timeline-card-header").click(function(){
  var subpageContent = $(this).next();
  if (subpageContent.css("display") !== "none") {
    subpageContent.addClass("expand-closed");
  } else {
    subpageContent.removeClass("expand-closed");
  }
});


$(".title").hover(function(){
  $(this).css("color", "#D1877F");
  $(this).next().css("color", "#D1877F");
  }, function(){
    $(this).css("color", color);
    $(this).next().css("color", color);
  });

$(".company-name").hover(function(){
  $(this).css("color", "#D1877F");
  $(this).prev().css("color", "#D1877F");
  }, function(){
    $(this).css("color", color);
    $(this).prev().css("color", color);
  });