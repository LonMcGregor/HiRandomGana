import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import GameHeader from './GameHeader';
import ReadGame from './ReadGame';
import WriteGame from './WriteGame';
import SettingsPage from './SettingsPage';
import registerServiceWorker from './registerServiceWorker';

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDark: window.localStorage.getItem("isDark")==="true",
            game: window.localStorage.getItem("game"),
            settingsActive: false,
            bagType: "katakana"
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
        let headerText = {};
        let game = {};
        switch(this.state.game){
            case "W":
                headerText = "Write Game";
                game = (<WriteGame
                    drawInk={darkClass}
                />);
                break;
            case "R":
            default:
                headerText = "Read Game";
                game = (<ReadGame />);
        }
        const header = (<GameHeader title={headerText} settingsSwitch={() => {this.toggleSettings()}} />);
        const settings = this.state.settingsActive ? <SettingsPage settingsChange={(newkv) => this.settingsChange(newkv)} currentSettings={this.state}/> : undefined;
        return (
            <div className={darkClass}>
                {header}
                {game}
                {settings}
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
