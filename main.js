function firstfunction() {
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
function entermainmenu() {

  var myobj = document.getElementById("fullscreenbtn");
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


$(document).ready(function () {
  var target = $("#game");
  $("#entergame").click(function () {
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

function enterscene1() {
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








// SCENE 1


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

$(document).ready(function () {
  var target = $("#scene1");
  $("#arrow").click(function () {
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

function gotoscene2() {
  document.getElementById('scenetwo').style.display = "flex";
}


// SCENE 2

function changetext2(text) {
  const paragraph = document.getElementById("text2")
  paragraph.innerText = text;
}


function enterhouse() {

  var myobj = document.getElementById("lore2");
  myobj.remove();
  document.getElementById('scene2fullscreen').style.display = "flex";

  changetext2("The evil MC.DAVID is upstairs... He probably still have some of my baloney sandwitch between his teeth..")
}


function s2nextpage() {

  var myobj = document.getElementById("s2textone");
  myobj.remove();

  document.getElementById('s2texttwo').style.display = "flex";

  changetext2("For now, I'm way to fat to take the stairs.. Let's find another way up!...")

}


function s2closepage() {

  var myobj = document.getElementById("s2texttwo");
  myobj.remove();

  document.getElementById('s2arrow1').style.display = "flex";
  document.getElementById('s2arrow2').style.display = "flex";
}



function openNav() {
  document.getElementById("myNav").style.width = "17rem";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


function showelevatorpic() {

  document.getElementById('elevatorpic').style.display = "flex";
  document.getElementById('changepicture').style.display = "initial";

  changetext2("Wha..??? WHAT IS THIS????!! ")


}

function changepicture() {


  document.getElementById('brokenframe').style.display = "flex";
  document.getElementById('changepicture2').style.display = "initial";

  document.getElementById('changepicturebtn').style.display = "none";
  document.getElementById('changepicture').style.display = "none";



  changetext2("BASTARD!!!... He must have known I was coming!... If i weren't so fat, I would run upstairs and kick his sack!...")


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
  changetext2("Well as you already know, I'm too fat for the elevator.. Let's find another way up!!..")
}


function gotoscene3(){
  document.getElementById('scenetwo').style.display = "none";
  document.getElementById('scenethree').style.display = "flex";
  changetext3("Wow.. A room full of f*ckn junk... Maybe I can find something useful in the back!..")
}

// SCENE 3, SCIENCEROOM FIRST VISIT



function changetext3(text) {
  const paragraph = document.getElementById("text3")
  paragraph.innerText = text;
}

function openNav2() {
  document.getElementById("myNav2").style.width = "17rem";
}

function closeNav2() {
  document.getElementById("myNav2").style.width = "0%";
}




function s3text1(){
  var myobj = document.getElementById("s3text1");
  myobj.remove();

  
  document.getElementById('s3arrow').style.display = "flex";

}


function bubblebox(){
document.getElementById('bubblebox').style.display = "flex";
document.getElementById('s3arrow').style.display = "none";
changetext3("HEY!!!! Unless you got something of value..., GET OUT FAT MAN!!!")

}

function s3text2(){
  document.getElementById('s3text2').style.display = "flex";
  document.getElementById('sadbigman').style.display = "initial";
  document.getElementById('bigman').style.display = "none";


  var myobj = document.getElementById("bubblebox");
  myobj.remove();

  changetext3("WTF... Maybe he won't be an asshole and help me if I bring him something of value!...")
  }


function closes3text2(){
  document.getElementById('s3arrow2').style.display = "flex";

  var myobj = document.getElementById("s3text2");
  myobj.remove();
}

function leavescienceroom1(){
  document.getElementById('scenetwo').style.display = "flex";
  document.getElementById('s2textafterscene3').style.display = "flex";
  document.getElementById('scenethree').style.display = "none";
  changetextafterscene3("Hmmmm... Valuable items for that guy...? Maybe he's a big fat man like me??? Where can I find items for a Fat dude?")
  var myobj = document.getElementById("s2arrow1");
  myobj.remove();

  var myobj = document.getElementById("s3arrow2");
  myobj.remove();

}

function changetextafterscene3(text) {
  const paragraph = document.getElementById("textafterscene3")
  paragraph.innerText = text;
}

function afterscienceclose(){
  var myobj = document.getElementById("s2textafterscene3");
  myobj.remove();
  document.getElementById('scienceroom2').style.display = "flex";
  document.getElementById('sadbigman').style.display = "none";
  document.getElementById('bigman').style.display = "flex";
  document.getElementById('s2arrow3').style.display = "flex";
}

// SCIENCE ROOM 2ND VISIT

function changetextscienceroom2(text) {
  const paragraph = document.getElementById("changetextscienceroom2")
  paragraph.innerText = text;
}

function scienceroom2(){
  document.getElementById('scenetwo').style.display = "none";
  document.getElementById('scenethree').style.display = "flex";
  document.getElementById('scienceroom2textbox').style.display = "flex";
  document.getElementById('keybox').style.display = "flex";
  changetextscienceroom2("What? That box were not there before!?? Let's check it out!...")
}

function s32text1(){
  document.getElementById('scienceroom2textbox').style.display = "none";
  
}

function openbox(){
  document.getElementById('keybox').style.display = "none";
  document.getElementById('showboxcontent').style.display = "flex";
}

function grabkey(){
  document.getElementById('gotkey').style.display = "initial";
  document.getElementById('gotkey2').style.display = "initial";
  document.getElementById('afterkeytext').style.display = "flex";
  document.getElementById('keybox').style.display = "none";
  document.getElementById('showboxcontent').style.display = "none";

  var myobj = document.getElementById("lockeddoor");
  myobj.remove();
  changetext3("NICE! I found the key to the kitchen! I will put it in my inventory for now!....")

}

function closekeytext(){
  document.getElementById('leavescienceroom2').style.display = "flex";
  document.getElementById('unlockeddoorarrow').style.display = "flex";
  var myobj = document.getElementById("afterkeytext");
  myobj.remove();

}

function leavescienceroom2(){
  document.getElementById('scenetwo').style.display = "flex";
  document.getElementById('scenethree').style.display = "none";
 

  var myobj = document.getElementById("leavescienceroom2");
  myobj.remove();
}



// KITCHENROOM

function changetextlockeddoor(text) {
  const paragraph = document.getElementById("textlockeddoor")
  paragraph.innerText = text;
}

function lockeddoor(){
  document.getElementById('lockeddoorcontainer').style.display = "flex";
  var myobj = document.getElementById("s2arrow3");
  myobj.remove();
  changetextlockeddoor("FUCK! The door is closed... Must find something to open it with!...")

}

function lockeddoorclose(){
  document.getElementById('lockeddoorcontainer').style.display = "none";
  document.getElementById('closeddoorarrow').style.display = "flex";

}

function lockeddoortry(){
  document.getElementById('lockeddoorcontainer').style.display = "flex";
  changetextlockeddoor("Stupid ass.. I thought i was clear. GET SOMETHING TO OPEN THE DOOR!...")
}

function unlockeddoor(){
  document.getElementById('lockeddoorcontainer').style.display = "flex";
  document.getElementById('unlocked').style.display = "initial";
  changetextlockeddoor("GOOD JOB!!! Let's go inside!...")
}