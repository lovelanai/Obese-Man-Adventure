var bleep = new Audio();
bleep.src = "assets/music/Mario-coin-sound.mp3";


var song = new Audio();
song.src = "/assets/music/Jeremy Blake - Powerup!.mp3";


var slurp = new Audio();
slurp.src = "/assets/music/Mario Warp Pipe Sound Effect.mp3";


function myFunction() {
    var myobj = document.getElementById("startbtn");
    myobj.remove();
    document.getElementById('game').style.display = "flex";
  }



  var elem = document.getElementById("game");
  function openMusic() {

    var myobj = document.getElementById("musicbtn");
    myobj.remove();

    document.getElementById('gamemenu').style.display = "flex";

  }






   function entername() {
    var person = prompt("Please enter your name", "");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      person + "! Last chance to back out..";
      
    }
    else {
      alert("Are you stupid? The game hasn't even started yet... try again");
  }
  var myobj = document.getElementById("entername");
  myobj.remove();

  document.getElementById('entergame').style.display = "flex";



    }


    $(document).ready(function() {
      var target = $("#game");
      $("#entergame").click(function() {
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
function entergametext(){
    document.getElementById('start-text').style.display = "flex";}
  

    function stop() {
      song.pause();
      song.currentTime = 0;
    }