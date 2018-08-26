import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./main.css";
import GameHeader from "./GameHeader";
import ReadGame from "./ReadGame";
import WriteGame from "./WriteGame";
import SettingsPage from "./SettingsPage";
import registerServiceWorker from "./registerServiceWorker";
import {AvailableBagIds} from "./KanaBag";

class Index extends Component {
    constructor(props){
        super(props);
        const storedDark = window.localStorage.getItem("isDark");
        const storedGame =  window.localStorage.getItem("game");
        const storedSyllabary = window.localStorage.getItem("syllabary");
        this.state = {
            isDark: storedDark==="true",
            game: storedGame ? storedGame : "R",
            syllabary: storedSyllabary ? storedSyllabary : AvailableBagIds[0],
            settingsActive: false
        };
    }

    settingsChange(newValues){
        this.setState(newValues);
    }

    toggleSettings(){
        this.setState({settingsActive: !this.state.settingsActive});
    }

    render() {
        const darkClass = this.state.isDark ? "page dark" : "page light";
        const ink = this.state.isDark ? "#ffffff" : "#000000";
        let headerText = {};
        let game = {};
        switch(this.state.game){
        case "W":
            headerText = "Write Game";
            game = (<WriteGame
                drawInk={ink}
                syllabary={this.state.syllabary}
                key={this.state.syllabary}
            />);
            break;
        case "R":
        default:
            headerText = "Read Game";
            game = (<ReadGame
                syllabary={this.state.syllabary}
                key={this.state.syllabary}
            />);
        }
        const settings = this.state.settingsActive ? <SettingsPage
            settingsChange={(newkv) => this.settingsChange(newkv)}
            isDark={this.state.isDark}
            game={this.state.game}
            syllabary={this.state.syllabary}
        /> : undefined;
        return (
            <div className={darkClass}>
                <GameHeader title={headerText} settingsSwitch={() => {this.toggleSettings();}} />
                {game}
                {settings}
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));
registerServiceWorker();
