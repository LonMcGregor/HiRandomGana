import React, { Component } from 'react';
import './ShuffleButton.css';

class ShuffleButton extends Component {
    render(){
        return (
            <button
            className="next"
            onClick={() => {this.props.clicker();}}
            ><span role="img" aria-label="Shuffle Next">🔀</span></button>
        );
    }
}

export default ShuffleButton;
