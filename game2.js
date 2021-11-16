

$(document).ready(function () {
  var target = $("#lore");
  $("#geet").click(function () {
      removeElement(target);
  });
});

function removeElement(target) {
  target.animate({
      opacity: "-=1"
  }, 1000, function () {
      target.remove();
  });

}

function geet() {
  var myobj = document.getElementById("geet");


  document.getElementById('gamefullscreen').style.display = "flex";

  changetext ("David that bastard is upstairs... He probably still have some of my baloney sandwitch between his teeth..")
}



function s2nextpage() {
      
  var myobj = document.getElementById("s2textone");
  myobj.remove();

  document.getElementById('s2texttwo').style.display = "flex";

  changetext ("For now I'm way to fat to take the stairs.. Let's find another way up!...")
 

}


function s2closepage(){
      
  var myobj = document.getElementById("s2texttwo");
  myobj.remove();

  document.getElementById('s2arrow1').style.display = "flex";
  document.getElementById('s2arrow2').style.display = "flex";
  document.getElementById('s2arrow3').style.display = "flex";

}

function openNav() {
  document.getElementById("myNav").style.width = "17rem";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


function showelevatorpic() {
  var myobj = document.getElementById("elevatorpic");


  document.getElementById('elevatorpic').style.display = "flex";

  changetext ("That bastard! He must have known I was coming... ")


}

function changepicture(){
  var myobj = document.getElementById("brokenframe");


  document.getElementById('brokenframe').style.display = "flex";

  changetext ("Lets kill that BASTARD ")

  var myobj = document.getElementById("changepicture");
  myobj.remove();

}