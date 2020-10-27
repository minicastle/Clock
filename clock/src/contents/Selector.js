import React from "react";
import "./CSS/Selector.css";

class Selector extends React.Component{
    render(){
        return (
            <div className = "selector-body">
                <div className = "color-selector">
                    <p>Color Selector</p>
                    <button className="Black" onClick = {function(e){
                        e.preventDefault();
                        this.props.onClick_selectedpage("black");
                    }.bind(this)}>Black</button>
                    <button className="white" onClick = {function(e){
                        e.preventDefault();
                        this.props.onClick_selectedpage("white");
                    }.bind(this)}>white</button>
                    <button className="chroma-key-w"onClick = {function(e){
                        e.preventDefault();
                        this.props.onClick_selectedpage("ckw");
                    }.bind(this)}>chromakey White</button>
                    <button className="chroma-key-b"onClick = {function(e){
                        e.preventDefault();
                        this.props.onClick_selectedpage("ckb");
                    }.bind(this)}>chromakey Black</button>
                </div>
            </div>
        )
    }
}

export default Selector;