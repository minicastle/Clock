import React from "react";
import './App.css';
import Clock from "./contents/Clock";
import Timer from "./contents/Timer";
import Selector from "./contents/Selector";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Mode:"Clock",
      color:"black"
    }
  }
  getContents(){
    let _contents;
    if(this.state.Mode === "Clock"){
      _contents = (<Clock color = {this.state.color}></Clock>);
    }
    else if(this.state.Mode === "Timer"){
      clearInterval(time);
      _contents = (<Timer></Timer>);
    }
    return _contents;
  }
  render(){

    return (
      <div className = "full">
        <nav className = "nav-bar">
          <a class="fab fa-twitch" target = "_blank" href = "https://www.twitch.tv/ppeulil">PPEULIL</a>
          <div class="contents">
            <span class="fas fa-clock" onClick = {function(){
              this.setState({Mode:"Clock"});
              window.location.reload();
            }.bind(this)}> Clock</span>
            <span class="fas fa-stopwatch" onClick = {function(){
              this.setState({Mode:"Timer"});
            }.bind(this)}> Timer</span>
          </div>
        </nav>
        {this.getContents()}
        <Selector onClick_selectedpage = {function(_color){
          this.setState({color:_color});
        }.bind(this)}></Selector>
      </div>
    );
  }
}

let time = setInterval(function(){
  const hr = document.querySelector("#hr");
  const mn = document.querySelector("#mn");
  const sc = document.querySelector("#sc");
  
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

export default App;
