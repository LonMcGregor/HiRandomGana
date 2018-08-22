import React, { Component } from 'react';
import ReactPainter from 'react-painter';
import ResizingKana from './ResizingKana';
import HiraganaBag from './KanaBag';
import ShuffleButton from './ShuffleButton';
import Prompter from './Prompter';
import './main.css';
import './GameCommon.css';

class WriteGame extends Component {

    constructor(props){
        super(props);
        this.state = {
            bag: new HiraganaBag(),
            rotate: "portrait",
            width: 300,
            height: 300
        };
    }

    nextRandom(){
        this.state.bag.nextRandom();
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
                height: Math.floor(h - headerHeight)
            });
        } else {
            this.setState({
                rotate: "portrait",
                width: w,
                height: Math.floor(h - (headerHeight*2))
            });
        }
    }

    clearCanvas(){
        const canvas = document.querySelector("canvas");
        if(canvas){
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    render() {
        const classRotate = "game " + this.state.rotate;
        const ink = this.props.drawInk==="page dark" ? "white" : "black";
        return (<div className={classRotate}>
            <ReactPainter
                width={this.state.width}
                height={this.state.height}
                initialColor={ink}
                key={new Date().getTime()}
                />
            <ResizingKana kana={this.state.bag.currentChar} isOverlay={true} isShown={true}/>
            <div className="controls">
                <button id="clear" class="controlButton" onClick={() => this.clearCanvas()}><span role="img" aria-label="Clear">🗑</span></button>
                <Prompter value={this.state.bag.currentPrompt} hiddenUntilFocus={false} />
                <ShuffleButton clicker={() => {this.nextRandom()}}/>
            </div>
        </div>);
    }
}

export default WriteGame;
