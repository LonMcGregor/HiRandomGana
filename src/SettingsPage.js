import React, { Component } from 'react';
import './main.css';

class SettingsPage extends Component {

    dark(){
        $("body").classList.toggle("dark");
        window.localStorage.setItem("dark", $("#dark").checked);
    }

    gameSwitch(){
        window.localStorage.setItem("whichGame", $("#whichGame").value);
    }

    gameChosen(){
        if($("#whichGame").value === "read"){
            $("#game").classList.add("visible");
            $("#game2").classList.remove("visible");
        } else {
            $("#game").classList.remove("visible");
            $("#game2").classList.add("visible");
        }
        clearCanvas();
    }

    loadSettings(){
        if(window.localStorage.getItem("dark") === "true"){
            $("#dark").checked = true;
            $("body").classList.add("dark");
        }
        $("#whichGame").value = window.localStorage.getItem("whichGame");
        gameChosen();
    }

  render() {
    return (
        <section id="settings" class="page">
            <header>
                <h1>Settings</h1>
                <button class="showsettings"><span role="img" aria-label="Close Settings">✔</span><span>Done</span></button>
            </header>

            <section>
                <input type="checkbox" id="dark" />
                <label for="dark">Dark Mode</label>
                <p></p>
                <label for="whichGame">Pick which game to play:</label>
                <select id="whichGame">
                    <option value="read">Read</option>
                    <option value="write">Write</option>
                </select>
                <p>Version 1.2.0 <a href="https://github.com/LonMcGregor/HiRandomGana">View on GitHub</a></p>
            </section>
        </section>
    );
  }
}

export default SettingsPage;
