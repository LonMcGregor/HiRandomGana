import React, { Component } from "react";
import PropTypes from "prop-types";
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
        let classText = "bigKana";
        classText += this.props.isOverlay ? " overlay" : "";
        classText += this.props.isShown ? " visible" : "";
        return (
            <div className={classText}>
                <span id="target" style={this.state}>{this.props.kana}</span>
            </div>
        );
    }
}
ResizingKana.propTypes = {
    isOverlay: PropTypes.bool,
    isShown: PropTypes.bool,
    kana: PropTypes.string.isRequired
};
ResizingKana.defaultProps = {
    isOverlay: false,
    isShown: true
};

export default ResizingKana;
