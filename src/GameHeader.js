import React, { Component } from "react";
import PropTypes from "prop-types";
import "./GameHeader.css";

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
GameHeader.propTypes = {
    title: PropTypes.string.isRequired,
    settingsSwitch: PropTypes.func.isRequired,
};

export default GameHeader;
