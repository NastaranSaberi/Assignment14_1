var btn_p = document.getElementById("btn_p");
var input_range = document.getElementById("input_range");
var number_bpm = document.getElementById("number_bpm");
var start = document.getElementById("start");
var click1 = new Audio ("click1 (1).mp3");
var bpm=140;
var Timer;
Timer=setInterval(beep,60000/ bpm);





btn_p.onclick = function () {
input_range.stepUp();
number_bpm.innerHTML = input_range.value;
}

btn_m.onclick = function () {
    input_range.stepDown();
    number_bpm.innerHTML = input_range.value;
}

input_range.oninput = function (){
    number_bpm.innerHTML = input_range.value
}



var count = 0;
function beep() {
    var audio = new Audio("sound1.wav");
      if(count ==1 ){
        click1.play();
      }
      else{
        click1.pause();
      }  
  }

function play(){
    if(count == 0){
      start.innerText = "PAUSE"
    count = 1 ;
    }

    else{
        clearInterval(Timer);
        count = 0;
        start.innerText = "PLAY"
        window.location.reload();
    }

}

