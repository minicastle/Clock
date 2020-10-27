import React from "react";
import "./CSS/Timer.css";

let nyang = 0;
let meong = 0;
let ban = 0;
let thperson = 0;

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            TimerSet: "Basic"
        };
    }
    render(){
        return (
            <div className = "Timer-body">
                <header>Timer</header>
                <div className = "Timer">
                    <div className = "TimePlusContents">
                        <button onClick = {function(e){
                            e.preventDefault();
                            nyang +=1;
                        }.bind(this)}>+냥체 5분</button>
                        <button onClick = {function(e){
                            e.preventDefault();
                            meong +=1;
                        }.bind(this)}>+멍체 5분</button>
                        <button onClick = {function(e){
                            e.preventDefault();
                            ban +=1;
                        }.bind(this)}>+반말 5분</button>
                        <button onClick = {function(e){
                            e.preventDefault();
                            thperson +=1;
                        }.bind(this)}>+3인칭 5분</button>
                    </div>
                    <div className = "TimeContents">
                        <button onClick = {function(e){
                            e.preventDefault();
                            this.setState({TimerSet:"Basic"});
                        }.bind(this)}>Basic</button>
                        <button onClick = {function(e){
                            e.preventDefault();
                            this.setState({TimerSet:"Nayng"});
                        }.bind(this)}>냥체 타이머</button>
                        <button onClick = {function(e){
                            e.preventDefault();
                            this.setState({TimerSet:"Meong"});
                        }.bind(this)}>멍체 타이머</button>
                        <button onClick = {function(e){
                            e.preventDefault();
                            this.setState({TimerSet:"Ban"});
                        }.bind(this)}>반말 타이머</button>
                        <button onClick = {function(e){
                            e.preventDefault();
                            this.setState({TimerSet:"Thperson"});
                        }.bind(this)}>3인칭 타이머</button>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Timer;