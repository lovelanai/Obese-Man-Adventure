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

    function enterscene1(){
      document.getElementById('scene1').style.display = "initial";
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
          var target = $("#scene1");
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
      
      function gotoscene2(){
        document.getElementById('scenetwo').style.display = "flex";
      }
      

      