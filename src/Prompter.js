import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ControlButton.css";
import "./Prompter.css";

class Prompter extends Component {
    render(){
        const chosenClass = this.props.hiddenUntilFocus ? "prompter hiddenUntilFocus controlButton" : "prompter controlButton";
        return (
            <input className={chosenClass} value={this.props.value} readOnly />
        );
    }
}
Prompter.propTypes = {
    hiddenUntilFocus: PropTypes.bool,
    value: PropTypes.string.isRequired
};
Prompter.defaultProps = {
    hiddenUntilFocus: false
};


export default Prompter;
