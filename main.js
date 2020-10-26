const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const color = document.querySelector(".color-selextor")
const frame = document.querySelector("#disitalClock");
const clock = document.querySelector(".clock");
const hrc = document.querySelector(".hr");
const s = document.createElement("style");

function changeColor(color){
  document.body.style.backgroundColor = color;
  if(color === "white"){
    frame.style.color = "black";
    frame.style.textShadow = "5px 2px 1px rgb(99, 97, 97)";
    clock.style.border = "8px solid #091921";
  }
  else if(color === "black"){
    frame.style.color = "white";
    frame.style.textShadow = "5px 2px 1px rgb(99, 97, 97)";
    clock.style.border = "8px solid white";
  }
  else if(color === "chkw"){
    document.body.style.backgroundColor = "#005500";
    frame.style.color = "white";
    frame.style.textShadow = "5px 2px 1px #091921";
    clock.style.border = "8px solid white";
  }
  else if(color === "chkb"){
    document.body.style.backgroundColor = "#005500";
    frame.style.color = "black";
    frame.style.textShadow = "5px 2px 1px rgb(99, 97, 97)";
    clock.style.border = "8px solid black";
  }
}

setInterval(function () {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  let hour = document.querySelector("#hour");
  let minutes = document.querySelector("#minutes");
  let seconds = document.querySelector("#seconds");
  let ampm = document.querySelector("#ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = "AM";

  if (h > 12) {
    h -= 12;
    am = "PM";
  }
  if (h < 10) {
    hour.innerHTML = "0" + h + ":";
  } else {
    hour.innerHTML = h + ":";
  }

  if (m < 10) {
    minutes.innerHTML = "0" + m + ":";
  } else {
    minutes.innerHTML = m + ":";
  }

  if (s < 10) {
    seconds.innerHTML = "0" + s;
  } else {
    seconds.innerHTML = s;
  }

  ampm.innerHTML = am;
});
