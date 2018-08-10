import React, { Component } from 'react';
import Game from './Game';
import ReactPainter from 'react-painter';
import './main.css';

class WriteGame extends Game {
  render() {
    return (<Game
        title="Writing Game"
        gameMain={
            <ReactPainter
                width={300}
                height={300}
            />
        }
        additionalControls={
            <div>
            <button id="clear" onClick={() => this.clearCanvas()}><span role="img" aria-label="Clear">🗑</span></button>
            <input id="prompt" type="text" value="A" readOnly />
            <span id="target" className="bigKana">あ</span>
            </div>
        }
    />);
  }
}

export default WriteGame;
