function changetext(text) { 
const paragraph = document.getElementById("text")
paragraph.innerText = text;
}




$(document).ready(function () {
    var target = $("#lore");
    $("#continue").click(function () {
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

function house() {
    var myobj = document.getElementById("continue");


    document.getElementById('house').style.display = "flex";

    changetext("This is it. Finally we can face the evil MC.SLIM! He will soon regret stealing my lunch 10 years ago.")



}

var spooky = new Audio();
spooky.src = "/assets/music/Kevin MacLeod - 8bit Dungeon Level.mp3";


var hit = new Audio();
hit.src = "/assets/music/8 bit impact sound effect (volume up).mp3";



function nextpage() {

  var myobj = document.getElementById("textone");
  myobj.remove();

  document.getElementById('texttwo').style.display = "flex";

  changetext("Let's enter the evil mansion and kick him in the sack!")
 

}


function closepage() {

  var myobj = document.getElementById("texttwo");
  myobj.remove();

  document.getElementById('arrow').style.display = "flex";

}


$(document).ready(function() {
    var target = $("#house");
    $("#arrow").click(function() {
      removeElement(target);
    });
  });
  
  function removeElement(target) {
    target.animate({
      opacity: "-=1"
    }, 1000, function() {
      target.remove();
    });
  }

function gotogamethree(){
  document.getElementById('scenetwo').style.display = "flex";
}

function stop() {
  spooky.pause();
  spooky.currentTime = 0;
}
