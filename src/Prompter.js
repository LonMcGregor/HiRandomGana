import React, { Component } from 'react';
import './Prompter.css';

class Prompter extends Component {
    render(){
        const chosenClass = this.props.hiddenUntilFocus ? "prompter hiddenUntilFocus" : "prompter";
        return (
            <input className={chosenClass} value={this.props.value} readOnly />
        );
    }
}

export default Prompter;
