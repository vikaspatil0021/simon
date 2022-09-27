var pArr = [];
var uArr = [];
var level1 = 0;
var level2 = 0;

// /////////////////////////////step 1
$(document).keypress(function(){
    start();

});

// ///////////////////////////////step 2 show pattern
function start(){
  if(level1 == level2){
    console.log(level1,level2)
    if(test(pArr,uArr)==true){
      uArr = [];
      level2=0;


      setTimeout(function (){
        var arrC = ["blue", "green", "red", "yellow"];
        var rn = Math.floor(Math.random()*4);

        blink(arrC[rn]);

        pArr.push(arrC[rn]);
        level1++;
        console.log(pArr,'pArr');
        $("#level-title").text("Level " + level1);///////// leveling

      },1000);


    }else{
      gameOver();
    }

  }

}


// /////////////////////////////step 3 click baced on pattern
$('.btn').click(function (event) {
  playSound(event.target.id); //playSound function

  blink(event.target.id); //blink function

  if(pArr != []){

    uArr.push(event.target.id);
    level2++;
    console.log(uArr,'uArr');
    if(test(pArr,uArr)==true){
      start();

    }else{
      gameOver()
    }

  }else{
    gameOver();
  }
});

// /////////////////////////test if random pattern and user pattern are same
function test(pArr,uArr){
  count=0;
  for (var i=0;i<uArr.length;i++){
    if(pArr[i]==uArr[i]){
      count++;
    }else{
      return false;
    }
  }
  if (count == (uArr.length)){
    return true;
  }else{
    return false;
  }
}

// ////////////////////////////////Game -Over
function gameOver(){
  $('body').addClass("game-over");
  setTimeout(function(){
    $('body').removeClass("game-over")
  }, 400);

  playSound('wrong');
  $("#level-title").text("Game Over, Press any key to restart");
  pArr = [];
  uArr=[];
  level1=0;
  level2=0;
}
// //////////////////////////////////// animation of patten and (on click)
function blink(coloor){
  $('#'+ (coloor)).addClass("pressed");
  setTimeout(function(){
    $('#'+ (coloor)).removeClass("pressed")
  }, 100);
}

// ////////////////////sound code
function playSound(colour){

    var sound = new Audio("sounds/" + colour + ".mp3");
    sound.play();


}
