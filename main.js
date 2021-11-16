var bleep = new Audio();
bleep.src = "assets/music/Mario-coin-sound.mp3";


var song = new Audio();
song.src = "/assets/music/Jeremy Blake - Powerup!.mp3";


var slurp = new Audio();
slurp.src = "/assets/music/Mario Warp Pipe Sound Effect.mp3";

var downsound = new Audio();
downsound.src = "/assets/music/Arcade game over original meme Sound Effect _ Comedy sound _ Funny sound effect _.mp3";

var among = new Audio();
among.src = "/assets/music/amongus.mp3";

var hit = new Audio();
hit.src = "/assets/music/8 bit impact sound effect (volume up).mp3";

var magicstart = new Audio();
magicstart.src = "/assets/music/Magic Game Start Sound Effect.mp3";

var warp = new Audio();
warp.src = "/assets/music/Mariowarp.mp3";



function firstfunction(){
var myobj = document.getElementById("firstfunction");
myobj.remove();
document.getElementById('gamepage').style.display = "block";
}


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






function begin() {

  var myobj = document.getElementById("begin");
  myobj.remove();

  document.getElementById('nameinput').style.display = "flex";



    }

    function entername() {
      var person = document.getElementById("userinput").value;
      if (person != null) {
        document.getElementById("demo").innerHTML =
        person + "! Last chance to back out..";
        
      }

      var myobj = document.getElementById("nameinput");
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

    function scenetwo(){
      document.getElementById('start-text').style.display = "initial";
    }


    var elem = document.getElementById("gamefullscreen");
    function openFullscreen() {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }


    function stop() {
      song.pause();
      song.currentTime = 0;
    }








    // GAME 2 


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
      
          changetext("This is it. Finally we can face the evil MC.DAVID! He will soon regret stealing my lunch 10 years ago.")
      
      
      
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
      