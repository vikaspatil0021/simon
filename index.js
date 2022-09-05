var ar1 = [];
var ar2 = [];
var ar = ["red", "green", "blue", "yellow"];
var  level = 0;
started = false;
$(document).on('keypress',function(){
  while(!started){
    $("#level-title").text("level "+level);
    f1();
    started= true;
  }

});

function f1() {
  ar2=[];
  level++;
  $("#level-title").text("Level " + level);

  var rn = Math.floor(Math.random() * 4);
  var randomColor = ar[rn];
  ar1.push(randomColor);
  console.log(ar1);
  $("#" + randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


}
$(".btn").click(function (){
  var userColor = this.id;
  ar2.push(userColor);
  console.log(ar2);
  playSound(userColor);
  checkAnswer(ar2.length-1);

});


function checkAnswer(level){
  if (ar1[level] === ar2[level]){
    if(ar1.length ===ar2.length){
      setTimeout(function(){
        f1();

      },1000);

    }
  }else{
    $("#level-title").text("Game Over, Press Any Key to Restart");

    playSound("wrong")
    startOver();
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");

    },1000);
  }
}


function startOver(){
  level = 0;
  ar1=[];
  started = false;
}


$(".btn").on("click", function() {
  var act = this.id;
  $("#" + act).addClass("pressed");
  setTimeout(function() {
    $("#" + act).removeClass("pressed");
  }, 100);

})
function playSound(sou){
  var audio = new Audio("sounds/" + sou + ".mp3");
  audio.play();

}
