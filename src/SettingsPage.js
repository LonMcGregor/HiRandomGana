import React, { Component } from "react";
import PropTypes from "prop-types";
import "./SettingsPage.css";

class SettingsPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            isDark: this.props.isDark,
            game: this.props.game,
            syllabary: this.props.syllabary
        };
        this.dark = this.dark.bind(this);
    }

    dark(event){
        window.localStorage.setItem("isDark", event.target.checked);
        this.props.settingsChange({isDark: event.target.checked});
    }

    settingChange(event, setting){
        window.localStorage.setItem(setting, event.target.value);
        const setObj = {};
        setObj[setting] = event.target.value;
        this.props.settingsChange(setObj);
    }

    render() {
        return (
            <div id="settings">
                <input type="checkbox" id="dark" onChange={this.dark} defaultChecked={this.state.isDark}/>
                <label htmlFor="dark">Dark Mode</label>
                <p></p>
                <label htmlFor="whichGame">Pick which game to play:</label>
                <select id="whichGame" defaultValue={this.state.game} onChange={(e) => {this.settingChange(e, "game");}}>
                    <option value="R">Read</option>
                    <option value="W">Write</option>
                </select>
                <p></p>
                <label htmlFor="whichSyllabary">Pick which syllabary to use:</label>
                <select id="whichSyllabary" defaultValue={this.state.syllabary} onChange={(e) => {this.settingChange(e, "syllabary");}}>
                    <option value="hiragana">hiragana</option>
                    <option value="katakana">katakana</option>
                </select>
                <p>Version 2.0.0 <a href="https://github.com/LonMcGregor/HiRandomGana">View on GitHub</a></p>
            </div>
        );
    }
}
SettingsPage.propTypes = {
    isDark: PropTypes.bool.isRequired,
    game: PropTypes.oneOf(["R", "W"]).isRequired,
    syllabary: PropTypes.oneOf(["hiragana", "katakana"]).isRequired,
    settingsChange: PropTypes.func.isRequired
};

export default SettingsPage;
