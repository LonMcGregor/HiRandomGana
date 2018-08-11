import React, { Component } from 'react';
import './GameHeader.css';

class GameHeader extends Component {
    render(){
        return (
            <header>
                <h1>{this.props.title}</h1>
                <button
                    className="showsettings"
                    onClick={() => this.props.settingsSwitch()}
                >
                    <span role="img" aria-label="Settings">⚙</span>
                    <span>Settings</span>
                </button>
            </header>
        );
    }
}

export default GameHeader;
