import React, { Component } from 'react';
import ReactPainter from 'react-painter';
import './main.css';

class WriteGame extends Component {
  render() {
    return (<div>
        <ReactPainter
                width={300}
                height={300}
            />
            <div>
            <button id="clear" onClick={() => this.clearCanvas()}><span role="img" aria-label="Clear">🗑</span></button>
            <input id="prompt" type="text" value="A" readOnly />
            <span id="target" className="bigKana">あ</span>
            </div>
    </div>);
  }
}

export default WriteGame;
