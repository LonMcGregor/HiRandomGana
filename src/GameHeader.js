import React, { Component } from 'react';
import './GameHeader.css';

class GameHeader extends Component {
    showSettings(){/*
        if($("#settings.visible")){
            gameChosen();
        } else {
            $(".visible").classList.toggle("visible");
        }
        $("#settings").classList.toggle("visible");*/ /* TODO */
    }

    render(){
        return (
            <header>
                <h1>{this.props.title}</h1>
                <button className="showsettings" onClick={() => this.showSettings()}><span role="img" aria-label="Settings">⚙</span><span>Settings</span></button>
            </header>
        );
    }
}

export default GameHeader;
