import React, { Component } from 'react';
import './SettingsPage.css';

class SettingsPage extends Component {

    constructor(props){
        super(props);
        this.state = this.props.currentSettings;
        this.dark = this.dark.bind(this);
        this.gameSwitch = this.gameSwitch.bind(this);
    }

    dark(event){
        window.localStorage.setItem("isDark", event.target.checked);
        this.props.settingsChange({isDark: event.target.checked});
    }

    gameSwitch(event){
        window.localStorage.setItem("game", event.target.value);
        this.props.settingsChange({game: event.target.value});
    }

    render() {
        return (
            <div id="settings">
                <input type="checkbox" id="dark" onChange={this.dark} defaultChecked={this.state.isDark}/>
                <label htmlFor="dark">Dark Mode</label>
                <p></p>
                <label htmlFor="whichGame">Pick which game to play:</label>
                <select id="whichGame" defaultValue={this.state.game} onChange={this.gameSwitch}>
                    <option value="R">Read</option>
                    <option value="W">Write</option>
                </select>
                <p>Version 2.0.0 <a href="https://github.com/LonMcGregor/HiRandomGana">View on GitHub</a></p>
            </div>
        );
    }
}

export default SettingsPage;
