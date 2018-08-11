import React, { Component } from 'react';
import ResizingKana from './ResizingKana';
import HiraganaBag from './KanaBag';
import ShuffleButton from './ShuffleButton';
import Prompter from './Prompter';
import './main.css';
import './GameCommon.css';

class ReadGame extends Component {

    constructor(props){
        super(props);
        this.state = {
            bag: new HiraganaBag(),
            rotate: "portrait"
        };
    }

    nextRandom(){
        this.state.bag.nextRandom();
        this.forceUpdate();
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
        if((w/h) > 0.9){
            this.setState({rotate: "landscape"});
        } else {
            this.setState({rotate: "portrait"});
        }
    }

    render() {
        const classRotate = "game " + this.state.rotate;
        return (
            <div className={classRotate}>
                <ResizingKana kana={this.state.bag.currentChar} />
                <div className="controls">
                    <Prompter value={this.state.bag.currentPrompt} hiddenUntilFocus={true} />
                    <ShuffleButton clicker={() => {this.nextRandom()}}/>
                </div>
            </div>
        );
    }
}

export default ReadGame;
