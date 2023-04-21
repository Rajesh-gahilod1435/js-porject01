function callme() {
  
  let morning = document.querySelector('#morning');
  let afternoon = document.querySelector('#afternoon');
  let evining = document.querySelector('#evining');
  let nigth = document.querySelector('#night');

  
  let wake = morning.options[document.getElementById('morning').selectedIndex];
  let lunch = afternoon.options[document.getElementById('afternoon').selectedIndex];
  let nap = evining.options[document.getElementById('evining').selectedIndex];
  let sleep = night.options[document.getElementById('night').selectedIndex];
  
  // console.log(wake.text);
  
  let store = document.getElementsByClassName('cont')
  store[0].innerText = `wake up time :  ${wake.text}`;
  store[1].innerText =`lunch time : ${lunch.text}`;
  store[2].innerText =`nap time : ${ nap.text}`;
  store[3].innerText = `nigth time : ${ sleep.text}`;
  
 
  let time = new Date();
  let hours = time.getHours();
  console.log(wake.value);
    var app=document.getElementById("wishes");

  
    let img = document.querySelector('#img');
   
  if (hours ===parseInt(morning.value)) 
  {
    console.log('Good morning');
    app.innerText = "Good morning";
    document.getElementById("wishes").style.height="50px",margin="100px";
    img.src="./morn.svg";
  }
  else if(hours===parseInt(afternoon.value))
  {
    console.log('afternoon');
    app.innerText = "GOOD AFTERNOON !!";
    document.getElementById("wishes").style.height="50px";
    img.src="./spo.svg";
  }
  else if (hours===parseInt(evining.value)) 
  {
    console.log('envinig 000');
    app.innerText = "GOOD EVENING !!";
    document.getElementById("wishes").style.height="50px";
    img.src="./lunch_image.png";
  }
  else if (hours===parseInt(nigth.value))
  {
    console.log('night 111');
    app.innerText = "GOOD NIGHT !!";
    document.getElementById("wishes").style.height="50px";
    img.src="./sleep.svg";
  }
  else
  {
    console.log(" the value");
    app.innerText = "GOOD MORNING!! WAKE UP!!";
    document.getElementById("wishes").style.height="50px";
    img.src="./morn.svg";
 alert("Time is Not Set !!");
  }
}

setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML=d.toLocaleTimeString() ;
var DateObj = new Date();
var hour = DateObj.getHours();
var minute = DateObj.getMinutes();
var seconds = DateObj.getSeconds(); 
var PMAM = "Am";


    if(hour>=6 && hour<11){
      document.getElementById("Note")[0];
  }
    if (hour>=11 && hour<15) {
      document.getElementById("Note").innerHTML="GRAB SOME HEALTHY BREAKFAST!!!"
    }
      if (hour>=15 && hour<21) {
        document.getElementById("Note").innerHTML="LET'S HAVE SOME LUNCH !!"
}
if (hour>=21 && hour<24) {
  document.getElementById("Note").innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
}
if (hour>=1 && hour<6) {
  document.getElementById("Note").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP"
}
if (hour>=12){
  hour-=12;  
  PMAM=".PM";
}
if (hour <10) {
  hour="  0" + hour;
}
if (minute <10) {
  minute="0" + minute;
}
if (seconds <10) {
  seconds="0" + seconds;
}

 var time="Time" + hour + ":" + minute + ":"+ seconds + "" + PMAM ;
document.getElementById("time").innerHTML=time;



}

function up() {
  document.getElementById("alarm-set").innerHTML="Party Time !"
  console.log("ok");
 document.getElementById("alarm-set").style.backgroundImage="linear-gradient(to right, #CB52F8, #FC5EFF)"

}

function down() {

  document.getElementById("alarm-set").innerHTML="Set Alarm"
  document.getElementById("alarm-set").style.backgroundImage="linear-gradient(to right,  #FC5EFF ,#CB52F8)"


  
}