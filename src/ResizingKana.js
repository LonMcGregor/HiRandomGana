import React, { Component } from 'react';
import "./ResizingKana.css";

class ResizingKana extends Component {
    updateDimensions(){
        if(window.innerWidth > window.innerHeight - 130){
            this.setState({fontSize: (window.innerHeight - 130) + "px"});
        } else {
            this.setState({fontSize: (window.innerWidth) + "px"});
        }
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", () => {this.updateDimensions();});
    }

    render() {
        return (
            <div className="bigKana">
                <span id="target" style={this.state}>{this.props.kana}</span>
            </div>
        );
    }
}

export default ResizingKana;
