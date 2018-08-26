import React, { Component } from "react";
import PropTypes from "prop-types";
import "./KanaBagProgressBar.css";

class KanaBagProgressBar extends Component {
    render(){
        return <progress
            className="kanabag"
            max={this.props.total}
            value={this.props.current}
        ></progress>;
    }
}

KanaBagProgressBar.propTypes = {
    total: PropTypes.number.isRequired,
    current: function(props, propName, componentName) {
        if (isNaN(props[propName]) || props[propName] > props["max"]) {
            return new Error(
                "Invalid prop ''" + propName + "' supplied to" +
                " ''" + componentName + "'. Cannot be higher than max."
            );
        }
    }
};

export default KanaBagProgressBar;
