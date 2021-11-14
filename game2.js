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



}

var spooky = new Audio();
spooky.src = "/assets/music/Kevin MacLeod - 8bit Dungeon Level.mp3";
