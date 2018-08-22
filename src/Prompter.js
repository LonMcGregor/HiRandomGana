import React, { Component } from 'react';
import './ControlButton.css';
import './Prompter.css';

class Prompter extends Component {
    render(){
        const chosenClass = this.props.hiddenUntilFocus ? "prompter hiddenUntilFocus controlButton" : "prompter controlButton";
        return (
            <input className={chosenClass} value={this.props.value} readOnly />
        );
    }
}

export default Prompter;
