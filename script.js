
$(document).ready(function(){


  $("#contact-info").hide();
  $("#projects-info").hide();
  $("#about-info").hide();


  $("#contact").click(hide)
  function hide (){
    $("#contact-info").fadeToggle("slow")
  }
  $("#contact-navigation-button").click(hidesssss)
  function hidesssss (){
    $("#contact-info").fadeToggle("slow")
  }


  $("#projects").click(hides)
  function hides (){
    $("#projects-info").slideToggle()
  }
  $("#project-navigation-button").click(hidessss)
  function hidessss (){
    $("#projects-info").fadeToggle("slow")
  }

  $("#about").click(hidess)
  function hidess (){
    $("#about-info").fadeToggle("slow")
  }
  $("#about-navigation-button").click(hidesss)
  function hidesss (){
    $("#about-info").fadeToggle("slow")
  }






});
