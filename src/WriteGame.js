import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactPainter from "react-painter";
import ResizingKana from "./ResizingKana";
import { BagFactory, AvailableBagIds } from "./KanaBag";
import ShuffleButton from "./ShuffleButton";
import Prompter from "./Prompter";
import "./main.css";
import "./GameCommon.css";
import KanaBagProgressBar from "./KanaBagProgressBar";

class WriteGame extends Component {

    constructor(props){
        super(props);
        this.state = {
            bag: new BagFactory().makeBag(this.props.syllabary),
            rotate: "portrait",
            width: 300,
            height: 300,
            showKana: false,
            canvasKey: new Date().getTime()
        };
    }

    nextRandom(){
        this.hideBigKana();
        this.state.bag.cycleNextRandom();
        this.forceUpdate();
        this.clearCanvas();
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", () => {this.updateDimensions();});
    }

    updateDimensions(){
        const w = window.innerWidth;
        const h = window.innerHeight;
        const headerHeight = 80;
        if((w/h) > 1.1){
            this.setState({
                rotate: "landscape",
                width: Math.floor(w*0.75),
                height: Math.floor(h - headerHeight),
                canvasKey: new Date().getTime()
            });
        } else {
            this.setState({
                rotate: "portrait",
                width: w,
                height: Math.floor(h - (headerHeight*2)),
                canvasKey: new Date().getTime()
            });
        }
    }

    clearCanvas(){
        this.setState({
            canvasKey: new Date().getTime()
        });
    }

    showBigKana(){
        this.setState({
            showKana: true
        });
    }

    hideBigKana(){
        this.setState({
            showKana: false
        });
    }

    render() {
        const classRotate = "game " + this.state.rotate;
        return (<div className={classRotate}>
            <KanaBagProgressBar total={this.state.bag.total()} current={this.state.bag.done()} />
            <ReactPainter
                width={this.state.width}
                height={this.state.height}
                initialColor={this.props.drawInk}
                key={this.state.canvasKey+this.props.drawInk}
            />
            <ResizingKana kana={this.state.bag.currentChar} isOverlay={true} isShown={this.state.showKana}/>
            <div className="controls">
                <button id="clear" className="controlButton" onClick={() => this.clearCanvas()}><span role="img" aria-label="Clear">🗑</span></button>
                <button id="reveal" className="controlButton" onFocus={() => {this.showBigKana();}} onBlur={() => {this.hideBigKana();}} ><span role="img" aria-label="Reveal">🔦</span></button>
                <Prompter value={this.state.bag.currentPrompt} hiddenUntilFocus={false} />
                <ShuffleButton clicker={() => {this.nextRandom();}}/>
            </div>
        </div>);
    }
}
WriteGame.propTypes = {
    drawInk: function(props, propName, componentName) {
        if (!/#[0-9a-fA-F]{6}/.test(props[propName])) {
            return new Error(
                "Invalid prop ''" + propName + "' supplied to" +
                " ''" + componentName + "'. Hex color validation failed."
            );
        }
    },
    syllabary: PropTypes.oneOf(AvailableBagIds).isRequired
};

export default WriteGame;
