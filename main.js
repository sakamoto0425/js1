let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");


let hours = 0;
let minutes = 0;
let seconds = 0;
let adp = 0;

let status;
let interval;

function stopWatch(){
  adp++;
  if(adp / 10 == 1){
      seconds++;
      adp = 0;
  if(seconds / 60 == 1){
    minutes++;
    seconds = 0;
    if(minutes / 60 == 1){
      hours++;
      minutes = 0;
    }
    }  
  }
  
  
  
  display.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + adp;
}
  start.addEventListener("click",function(){
  interval = setInterval(stopWatch,100);
  $(this).attr("disabled","disabled")
  })
  
  stop.addEventListener("click",function(){
  clearInterval(interval);
  $(start).removeAttr("disabled")
  }
  )
  
  reset.addEventListener("click",function(){
    clearInterval(interval);
    display.innerHTML = "0:0:0:0";
    hours = 0;
    minutes = 0;
    seconds = 0;
    adp = 0;
  }
  )
  
  
  
  
  