function firstfunction() {  // Click to go to Gamepage
  var myobj = document.getElementById("firstfunction");
  myobj.remove();
  document.getElementById('gamepage').style.display = "block";
}




function myFunction() { // Click to start game
  var myobj = document.getElementById("startbtn");
  myobj.remove();
  document.getElementById('game').style.display = "flex";
}


var elem = document.getElementById("game");
function entermainmenu() { // Click to enter menu

  var myobj = document.getElementById("fullscreenbtn");
  myobj.remove();

  document.getElementById('gamemenu').style.display = "flex";
}


function begin() {// Continue

  var myobj = document.getElementById("begin");
  myobj.remove();

  document.getElementById('nameinput').style.display = "flex";
}

function entername() { //Entername input
  var person = document.getElementById("userinput").value;
  if (person != null) {
    document.getElementById("demo").innerHTML =
      person + "! Last chance to back out..";

  }
  var myobj = document.getElementById("nameinput");
  myobj.remove();

  document.getElementById('entergame').style.display = "flex";
}


$(document).ready(function () { // Fade animation between Menu and scene 1
  var target = $("#game");
  $("#entergame").click(function () {
    removeElement(target);
  });

});

function removeElement(target) { // Fade animation (fx) between Menu and scene 1
  target.animate({
    opacity: "-=1"
  }, 1000, function () {
    target.remove();
  });
}

function enterscene1() { // SHOWING SCENE 1
  document.getElementById('scene1').style.display = "initial";
}

var elem = document.getElementById("gamefullscreen");
function openFullscreen() {           //ENABLE FULLSCREEN
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}


function stop() { // PAUSE MUSIC
  song.pause();
  song.currentTime = 0;
}








// SCENE 1


function changetext(text) { // CHANGE TEXT IN HTML (SCENE 1)
  const paragraph = document.getElementById("text")
  paragraph.innerText = text;
}


$(document).ready(function () { // FADE BETWEEN SCENE 1 INFO AND SCENE 1
  var target = $("#lore");
  $("#continue").click(function () {
    removeElement(target);
  });
});

function removeElement(target) { // FADE ANIMATION (FX) SCENE 1 INFO AND SCENE 1
  target.animate({
    opacity: "-=1"
  }, 1000, function () {
    target.remove();
  });

}

function house() { // SCENE 1 TEXTBUTTON1
  var myobj = document.getElementById("continue");

  document.getElementById('house').style.display = "flex";

  changetext("This is it. Finally we can face the evil MC.DAVID! He will soon regret stealing my lunch 10 years ago.")
}


function nextpage() { // SCENE 1 TEXTBUTTON2

  var myobj = document.getElementById("textone");
  myobj.remove();

  document.getElementById('texttwo').style.display = "flex";

  changetext("Let's enter the evil mansion and kick him in the sack!")


}

function closepage() { //SCENE1 CLOSE TEXTBOX AND ENTER HOUSE

  var myobj = document.getElementById("texttwo");
  myobj.remove();

  document.getElementById('arrow').style.display = "flex";

}

$(document).ready(function () { //FADE BETWEEN SCENE 1 AND SCENE 2
  var target = $("#scene1");
  $("#arrow").click(function () {
    removeElement(target);
  });
});

function removeElement(target) { //FADE (FX) SCENE 1 AND SCENE 2
  target.animate({
    opacity: "-=1"
  }, 1000, function () {
    target.remove();
  });

}

function gotoscene2() { // SHOW SCENE 2
  document.getElementById('scenetwo').style.display = "flex";
}


// SCENE 2

function changetext2(text) { // CHANGE TEXT IN HTML (SCENE 2)
  const paragraph = document.getElementById("text2")
  paragraph.innerText = text;
}


function enterhouse() { // CLOSE SCENE 2 INFO

  var myobj = document.getElementById("lore2");
  myobj.remove();
  document.getElementById('scene2fullscreen').style.display = "flex";

  changetext2("The evil MC.DAVID is upstairs... He probably still have some of my baloney sandwitch between his teeth..")
}


function s2nextpage() { // SCENE 2 TEXT1

  var myobj = document.getElementById("s2textone");
  myobj.remove();

  document.getElementById('s2texttwo').style.display = "flex";

  changetext2("For now, I'm way to fat to take the stairs.. Let's find another way up!...")

}


function s2closepage() { //SCENE 2 TEXT 2

  var myobj = document.getElementById("s2texttwo");
  myobj.remove();

  document.getElementById('s2arrow1').style.display = "flex";
  document.getElementById('s2arrow2').style.display = "flex";
}



function openNav() { // SHOW INVENTORY (SCENE 2)
  document.getElementById("myNav").style.width = "17rem";
}

function closeNav() { // CLOSE INVENTORY (SCENE 2)
  document.getElementById("myNav").style.width = "0%";
}


function showelevatorpic() { // SHOW ELEVATORPICTURE1 + TEXT

  document.getElementById('elevatorpic').style.display = "flex";
  document.getElementById('changepicture').style.display = "initial";

  changetext2("Wha..??? WHAT IS THIS????!! ")


}

function changepicture() { // REPLACE WITH ELEVATORPICTURE 2 + TEXT


  document.getElementById('brokenframe').style.display = "flex";
  document.getElementById('changepicture2').style.display = "initial";

  document.getElementById('changepicturebtn').style.display = "none";
  document.getElementById('changepicture').style.display = "none";



  changetext2("BASTARD!!!... He must have known I was coming!... If i weren't so fat, I would run upstairs and kick his sack!...")


}

function changepicture2() { // CLOSE ELEVATORPIC


  document.getElementById('brokenframe').style.display = "none";
  document.getElementById('elevatorpic').style.display = "none";
  document.getElementById('s2arrow2').style.display = "none";
  document.getElementById('noelevator').style.display = "flex";

}

function noelevator(){  // SHOW ELEVATORPIC 3 + TEXT
  document.getElementById('fatcry').style.display = "initial";
  document.getElementById('elevatorpic').style.display = "flex";
  changetext2("Well as you already know, I'm too fat for the elevator.. Let's find another way up!!..")
}


function gotoscene3(){  // ENTER SCENE 3 & HIDE SCENE 2
  document.getElementById('scenetwo').style.display = "none";
  document.getElementById('scenethree').style.display = "flex";
  changetext3("Wow.. A room full of f*ckn junk... Maybe I can find something useful in the back!..")
}

// SCENE 3, SCIENCEROOM FIRST VISIT



function changetext3(text) {  // CHANGE TEXT IN HTML (SCENE 3)
  const paragraph = document.getElementById("text3")
  paragraph.innerText = text;
}

function openNav2() { // SHOW INVENTORY (SCENE 3)
  document.getElementById("myNav2").style.width = "17rem";
}

function closeNav2() { // CLOSE INVENTORY (SCENE 3)
  document.getElementById("myNav2").style.width = "0%";
}




function s3text1(){ // SCENE 3 TEXT1
  var myobj = document.getElementById("s3text1");
  myobj.remove();

  
  document.getElementById('s3arrow').style.display = "flex";

}


function bubblebox(){ // SCENE 3 BUBBLETEXT1
document.getElementById('bubblebox').style.display = "flex";
document.getElementById('s3arrow').style.display = "none";
changetext3("HEY!!!! Unless you got something of value..., GET OUT FAT MAN!!!")

}

function s3text2(){ // SCENE 3 TEXT2
  document.getElementById('s3text2').style.display = "flex";
  document.getElementById('sadbigman').style.display = "initial";
  document.getElementById('bigman').style.display = "none";


  var myobj = document.getElementById("bubblebox");
  myobj.remove();

  changetext3("WTF... Maybe he won't be an asshole and help me if I bring him something of value!...")
  }


function closes3text2(){ // SCENE 3 CLOSE TEXTBOX
  document.getElementById('s3arrow2').style.display = "flex";

  var myobj = document.getElementById("s3text2");
  myobj.remove();
}

function leavescienceroom1(){ // ENTER SCENE 2 AND HIDE SCENE 3
  document.getElementById('scenetwo').style.display = "flex";
  document.getElementById('s2textafterscene3').style.display = "flex";
  document.getElementById('scenethree').style.display = "none";
  changetextafterscene3("Hmmmm... Valuable items for that guy...? Maybe he's a big fat man like me??? Where can I find items for a Fat dude?")
  var myobj = document.getElementById("s2arrow1");
  myobj.remove();

  var myobj = document.getElementById("s3arrow2");
  myobj.remove();

}

function changetextafterscene3(text) { // CHANGE TEXT (SECOND TIME VISITING SCENE 2)
  const paragraph = document.getElementById("textafterscene3")
  paragraph.innerText = text;
}

function afterscienceclose(){ // (SECOND TIME VISITING SCENE 2) TEXT1
  var myobj = document.getElementById("s2textafterscene3");
  myobj.remove();
 
  document.getElementById('sadbigman').style.display = "none";
  document.getElementById('bigman').style.display = "flex";
  document.getElementById('s2arrow3').style.display = "flex";
}

// SCIENCE ROOM 2ND VISIT

function changetextscienceroom2(text) { // CHANGE TEXT (SECOND TIME VISITING SCENE 3)
  const paragraph = document.getElementById("changetextscienceroom2")
  paragraph.innerText = text;
}

function scienceroom2(){ // (SECOND TIME VISITING SCENE 3) TEXT1
  document.getElementById('scenetwo').style.display = "none";
  document.getElementById('scenethree').style.display = "flex";
  document.getElementById('scienceroom2textbox').style.display = "flex";
  document.getElementById('keybox').style.display = "flex";

  var myobj = document.getElementById("scienceroom2");
  myobj.remove();
  changetextscienceroom2("What? That box were not there before!?? Let's check it out!...")
}

function s32text1(){ // (SECOND TIME VISITING SCENE 3) REMOVE TEXTBOX
  document.getElementById('scienceroom2textbox').style.display = "none";
  
}

function openbox(){ // (SECOND TIME VISITING SCENE 3) OPEN BOX
  document.getElementById('keybox').style.display = "none";
  document.getElementById('showboxcontent').style.display = "flex";
}

function grabkey(){ // (SECOND TIME VISITING SCENE 3) GRAB KEY
  document.getElementById('gotkey').style.display = "initial";
  document.getElementById('gotkey2').style.display = "initial";
  
  document.getElementById('afterkeytext').style.display = "flex";
  document.getElementById('keybox').style.display = "none";
  document.getElementById('showboxcontent').style.display = "none";

  var myobj = document.getElementById("lockeddoor");
  myobj.remove();
  changetext3("NICE! I found the key to the kitchen! I will put it in my inventory for now!....")

}

function closekeytext(){ // (SECOND TIME VISITING SCENE 3) TEXT2
  document.getElementById('leavescienceroom2').style.display = "flex";
  document.getElementById('unlockeddoorarrow').style.display = "flex";
  var myobj = document.getElementById("afterkeytext");
  myobj.remove();


}

function leavescienceroom2(){ // ENTER SCENE 2
  document.getElementById('scenetwo').style.display = "flex";
  document.getElementById('scenethree').style.display = "none";



}



// KITCHENROOM ENTER

function changetextlockeddoor(text) { // CHANGE TEXT (THIRD TIME VISITING SCENE 2)
  const paragraph = document.getElementById("textlockeddoor")
  paragraph.innerText = text;
}

function lockeddoor(){ //TRY TO OPEN LOCKED DOOR + TEXT
  document.getElementById('lockeddoorcontainer').style.display = "flex";
  document.getElementById('scienceroom2').style.display = "flex";
  var myobj = document.getElementById("s2arrow3");
  myobj.remove();
  changetextlockeddoor("FUCK! The door is locked... Must find something to open it with!...")

}

function lockeddoorclose(){ // LEAVE LOCKED DOOR
  
  document.getElementById('lockeddoorcontainer').style.display = "none";
  document.getElementById('closeddoorarrow').style.display = "flex";

}

function lockeddoortry(){ // TRY LOCKED DOOR AGAIN (OPTIONAL)
  document.getElementById('lockeddoorcontainer').style.display = "flex";
  changetextlockeddoor("Stupid ass.. I thought i was clear. GET SOMETHING TO OPEN THE DOOR!...")
}

function unlockeddoor(){ // DOOR UNLOCKED
  document.getElementById('lockeddoorcontainer').style.display = "flex";
  document.getElementById('unlocked').style.display = "initial";
  document.getElementById('unlockeddoorbtn').style.display = "initial";
  var myobj = document.getElementById("lockeddoorbtn");
  myobj.remove();
  changetextlockeddoor("GOOD JOB!!! Let's go inside!...")
}

// KITCHEN



function changetext4(text) { // CHANGETEXT (SCENE 4)
  const paragraph = document.getElementById("text4")
  paragraph.innerText = text;
}


function openNav3() { // SHOW INVENTORY (SCENE 4)
  document.getElementById("myNav3").style.width = "17rem";
}

function closeNav3() { // CLOSE INVENTORY (SCENE 4)
  document.getElementById("myNav3").style.width = "0%";
}

function enterkitchen(){ // ENTER SCENE 4 + TEXT1 & HIDE SCENE 2 
  document.getElementById('scenefour').style.display = "flex";
  document.getElementById('scenetwo').style.display = "none";
document.getElementById('4btn1').style.display = "flex";
var myobj = document.getElementById("lockeddoorcontainer");
myobj.remove();


changetext4("How am I supposed to find shit in here? This place is even more boring than the science-whatever?...")

}

function next41(){ // (SCENE 4) TEXT2
  document.getElementById('4btn2').style.display = "flex";
  var myobj = document.getElementById("4btn1");
  myobj.remove();

  changetext4("Well... I might aswell take a look around!...")
}

function next42(){ // (SCENE 4) REMOVE TEXTBOX

  document.getElementById('fridge').style.display = "flex";
  var myobj = document.getElementById("4text1");
  myobj.remove();
}

function openfridge(){ // OPEN FRIDGE + BUBBLETEXT1 (SCENE 4)
  document.getElementById('openfridge').style.display = "flex";
  var myobj = document.getElementById("fridge");
  myobj.remove();
  changetext4("YO YO! YOU FOUND ME! I'M FREDRIK!")
}

function bubble42(){ //BUBBLETEXT2 + ACCEPT GIFT (SCENE 4)
  var myobj = document.getElementById("fridgebtn1");
  myobj.remove();

  document.getElementById('fridgebtn2').style.display = "flex";
  changetext4("HERE MAN! TAKE THIS AND GIVE IT TO THE SCIENCEGUY!")
}

function bubble43(){ // CLOSE FRIDGE + TEXT3 (SCENE 4)
  document.getElementById('4text2').style.display = "flex";
  document.getElementById('4text2box').style.display = "flex";
  document.getElementById('korg').style.display = "flex";
  var myobj = document.getElementById("infridge");
  myobj.remove();
  var myobj = document.getElementById("bubblebox2");
  myobj.remove();


  
  changetext4("HOLY SHIT! WE GOT THE MICRO-KORG!!! LET'S BRING IT TO THE MYSTERIOUS MAN!")
}

function closekorg(){ // CLOSE TEXTBOX2 (SCENE 4)
  document.getElementById('gotkorg').style.display = "initial";
  document.getElementById('gotkorg2').style.display = "initial";


  document.getElementById('leavekitchen').style.display = "flex";

  var myobj = document.getElementById("4text2");
  myobj.remove();

  var myobj = document.getElementById("4text2box");
  myobj.remove();

  var myobj = document.getElementById("openfridge");
  myobj.remove();

}

function leavekitchen(){ // ENTER FINAL SCENE + TEXT & HIDE SCENE 4
    document.getElementById('scenefour').style.display = "none";
    document.getElementById('scenefive').style.display = "flex";


    var myobj = document.getElementById("gotkey");
    myobj.remove();
  
    var myobj = document.getElementById("gotkey2");
    myobj.remove();



}

function changetext5(text) { // CHANGE TEXT BUBBLEBOX (SCENE 5)
  const paragraph = document.getElementById("text5")
  paragraph.innerText = text;
}
function changetext6(text) { // CHANGE TEXT TEXTBOX (SCENE 5)
  const paragraph = document.getElementById("text6")
  paragraph.innerText = text;
}

function meetjanne(){ // ADD JANNE + TEXT1 BUBBLEBOX (SCENE 5)
  document.getElementById('jannecontainer').style.display = "flex";
  document.getElementById('janne').style.display = "flex";
  document.getElementById('bubblebox3').style.display = "flex";

  var myobj = document.getElementById("arrowmeetjanne");
  myobj.remove();

  changetext5("I THOUGHT I TOLD YOU TO STAY OUT OF MY LAB FAT MAN!!!...")

}

function janneinfo(){ // TEXT2 BUBBLEBOX (SCENE 5)
  changetext5("MY NAME IS JANNE CHEMISTRY!!... WHAT DO YOU WANT DUMBASS????!!")
  document.getElementById('jannetext1').style.display = "flex";
  
  var myobj = document.getElementById("janneinfo");
  myobj.remove();

}

function jannetext1(){ // TEXT3 BUBBLEBOX + SHOW ITEM OF VALUE (SCENE 5)
  changetext5("WHAAAAT? GIVE ME THAT!! I WILL GIVE YOU SOMETHING IN RETURN TO HELP YOU BEAT MC.DAVID!!..")
  document.getElementById('jannetext2').style.display = "flex";
  document.getElementById('itemofvalue').style.display = "flex";
  var myobj = document.getElementById("jannetext1");
  myobj.remove();
}



function jannetext2(){ // TEXT4 BUBBLEBOX  + REMOVE ITEM OF VALUE(SCENE 5)
  changetext5("THANKYOU THANKYOU!!!.. HERE YOU GO! AS PROMISED, FATMAN!!.. ")
  document.getElementById('jannetext3').style.display = "flex";



  var myobj = document.getElementById("itemofvalue");
  myobj.remove();
  var myobj = document.getElementById("jannetext2");
  myobj.remove();
}



function jannetext3(){ // REMOVE BUBBLEBOX & JANNE + ADD TEXTBOX, TEXT1 & THE SLIM POTION (SCENE 5)

  document.getElementById('slimpotion').style.display = "flex";
 

  var myobj = document.getElementById("jannecontainer");
  myobj.remove();


 document.getElementById('afterjanne').style.display = "flex";
 
 document.getElementById('afterjannetext').style.display = "flex"; 

 changetext6("NICEEE! WE GOT THE SLIMPOTION! WE CAN FINALLY GET UPSTAIRS AND FACE MC.DAVID!!!!... BOTTOMS UP!!!...")
}

function showbottle(){ // TEXT2 + TURN SLIMBOTION INTO BUTTON (SCENE 5)

  document.getElementById('slimpotionbtn').style.display = "flex"; 

  var myobj = document.getElementById("afterjanne");
  myobj.remove();

}


function endgame(){ // SHOW END TITLE
  document.getElementById('buyfullgame').style.display = "flex";
}

$(document).ready(function () { // FULL GAME FADEOUT
  var target = $("#scene5");
  $("#slimpotionbtn").click(function () {
    removeElement(target);
  });

});

function removeElement(target) { // (FX) FULL GAME FADEOUT
  target.animate({
    opacity: "-=1"
  }, 1000, function () {
    target.remove();
  });
}

