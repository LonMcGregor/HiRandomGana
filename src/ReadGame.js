import React, { Component } from 'react';
import GameHeader from './GameHeader';
import ResizingKana from './ResizingKana';
import HiraganaBag from './KanaBag';
import ShuffleButton from './ShuffleButton';
import Prompter from './Prompter';
import './main.css';
import './GameCommon.css';

class ReadGame extends Component {

    constructor(props){
        super(props);
        this.state = {bag: new HiraganaBag()};
    }

    nextRandom(){
        this.state.bag.nextRandom();
        this.forceUpdate();
    }

    render() {
        return (
            <div className="game">
                <GameHeader title="Read Game" />
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
