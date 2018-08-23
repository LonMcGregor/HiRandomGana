import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ControlButton.css";
import "./ShuffleButton.css";

class ShuffleButton extends Component {
    render(){
        return (
            <button
                className="next controlButton"
                onClick={() => {this.props.clicker();}}
            ><span role="img" aria-label="Shuffle Next">🔀</span></button>
        );
    }
}
ShuffleButton.propTypes = {
    clicker: PropTypes.func.isRequired
};

export default ShuffleButton;
