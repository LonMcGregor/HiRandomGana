import React, { Component } from 'react';
import "./ResizingKana.css";

class ReadGame extends Component {

    constructor(props){
        super(props);
        this.updateDimensions();
    }

    updateDimensions(){
        if(window.innerWidth > window.innerHeight - 130){
            this.setState({fontSize: (window.innerHeight - 130) + "px"});
        } else {
            this.setState({fontSize: (window.innerWidth) + "px"});
        }/*
        $("canvas").width = $("canvas").parentElement.getBoundingClientRect().width;
        $("canvas").height = $("canvas").parentElement.getBoundingClientRect().height;*/
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", () => {this.updateDimensions();});
    }

    render() {
        return <span id="target" className="bigKana" style={this.state}>{this.props.kana}</span>;
    }
}

export default ReadGame;
