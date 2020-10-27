import React from "react";
import clockimg from "../image/clock.png";
import "./CSS/Clock.css";

class Clock extends React.Component{
    getColor(){
        if(this.props.color === "white"){
            return (<div className = "clock-body" style = {{backgroundColor:"white"}}>
                <div class="clock" style = {{border: "8px solid black"}}>
                    <img src = {clockimg}></img>
                    <div class="hour">
                        <div class="hr" id="hr"></div>
                    </div>
                    <div class="min">
                        <div class="mn" id="mn"></div>
                    </div>
                    <div class="sec">
                        <div class="sc" id="sc"></div>
                    </div>
                </div>
                    <div id="disitalClock" style = {{color : "black"}}>
                        <div id="ampm"></div>
                        <div id="hour"></div>
                        <div id="minutes"></div>
                        <div id="seconds"></div>
                    </div>
            </div>);
        }
        else if(this.props.color === "black"){
            return (<div className = "clock-body">
                <div class="clock">
                    <img src = {clockimg}></img>
                    <div class="hour">
                        <div class="hr" id="hr"></div>
                    </div>
                    <div class="min">
                        <div class="mn" id="mn"></div>
                    </div>
                    <div class="sec">
                        <div class="sc" id="sc"></div>
                    </div>
                </div>
                    <div id="disitalClock">
                        <div id="ampm"></div>
                        <div id="hour"></div>
                        <div id="minutes"></div>
                        <div id="seconds"></div>
                    </div>
            </div>);
        }
        else if(this.props.color === "ckw"){
            return (<div className = "clock-body" style = {{backgroundColor:"#005500"}}>
                <div class="clock" style = {{border: "8px solid white"}}>
                    <img src = {clockimg}></img>
                    <div class="hour">
                        <div class="hr" id="hr"></div>
                    </div>
                    <div class="min">
                        <div class="mn" id="mn"></div>
                    </div>
                    <div class="sec">
                        <div class="sc" id="sc"></div>
                    </div>
                </div>
                    <div id="disitalClock" style = {{color : "white"}}>
                        <div id="ampm"></div>
                        <div id="hour"></div>
                        <div id="minutes"></div>
                        <div id="seconds"></div>
                    </div>
            </div>);
        }
        else if(this.props.color === "ckb"){
            return (<div className = "clock-body" style = {{backgroundColor:"#005500"}}>
                <div class="clock" style = {{border: "8px solid black"}}>
                    <img src = {clockimg}></img>
                    <div class="hour">
                        <div class="hr" id="hr"></div>
                    </div>
                    <div class="min">
                        <div class="mn" id="mn"></div>
                    </div>
                    <div class="sec">
                        <div class="sc" id="sc"></div>
                    </div>
                </div>
                    <div id="disitalClock" style = {{color : "black"}}>
                        <div id="ampm"></div>
                        <div id="hour"></div>
                        <div id="minutes"></div>
                        <div id="seconds"></div>
                    </div>
            </div>);
        }
    }
    render(){
        return (
            <div>
                {this.getColor()}
            </div>
        )
    }
}

export default Clock;