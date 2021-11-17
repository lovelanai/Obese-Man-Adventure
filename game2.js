

$(document).ready(function () {
  var target = $("#lore2");
  $("#enterhouse").click(function () {
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



function enterhouse() {


  document.getElementById('scene2fullscreen').style.display = "flex";

  changetext("The evil MC.DAVID is upstairs... He probably still have some of my baloney sandwitch between his teeth..")
}



function s2nextpage() {

  var myobj = document.getElementById("s2textone");
  myobj.remove();

  document.getElementById('s2texttwo').style.display = "flex";

  changetext("For now, I'm way to fat to take the stairs.. Let's find another way up!...")


}


function s2closepage() {

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

  document.getElementById('elevatorpic').style.display = "flex";




  changetext("Wha..??? WHAT IS THIS????!! ")


}

function changepicture() {


  document.getElementById('brokenframe').style.display = "flex";
  document.getElementById('changepicture2').style.display = "initial";

  document.getElementById('changepicturebtn').style.display = "none";
  document.getElementById('changepicture').style.display = "none";



  changetext("BASTARD!!!... He must have known I was coming!... If i weren't so fat, I would run upstairs and kick his sack!...")


}

function changepicture2() {


  document.getElementById('brokenframe').style.display = "none";
  document.getElementById('elevatorpic').style.display = "none";
  document.getElementById('s2arrow2').style.display = "none";
  document.getElementById('noelevator').style.display = "flex";

}

function noelevator(){
  document.getElementById('fatcry').style.display = "initial";
  document.getElementById('elevatorpic').style.display = "flex";
  changetext("Well as you already know, I'm too fat for the elevator.. Let's find another way up!!..")
}


// SCIENCEROOM FIRST VISIT

$(document).ready(function () {
  var target = $("#game3test");
  $("#enterscienceroom").click(function () {
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

function enterscienceroom() {


  document.getElementById('gamefullscreen').style.display = "flex";
  changetext("Wow.. A room full of f*ckn junk... Maybe I can find something useful in the back!..")


}


function s3text1(){
  var myobj = document.getElementById("s3text1");
  myobj.remove();

  
  document.getElementById('s3arrow').style.display = "flex";

}


function bubblebox(){
document.getElementById('bubblebox').style.display = "flex";
document.getElementById('s3arrow').style.display = "none";
changetext("HEY!!!! Unless you got something of value..., GET OUT FAT MAN!!!")

}

function s3text2(){
  document.getElementById('s3text2').style.display = "flex";
  document.getElementById('sadbigman').style.display = "initial";
  document.getElementById('bigman').style.display = "none";


  var myobj = document.getElementById("bubblebox");
  myobj.remove();

  changetext("WTF... Maybe he won't be an asshole and help me if I bring him something of value!...")
  }


function closes3text2(){
  document.getElementById('s3arrow2').style.display = "flex";

  var myobj = document.getElementById("s3text2");
  myobj.remove();
}

function leavescienceroom1(){



}