import React, { Component } from 'react';
import Game from './Game';
import './main.css';

class WriteGame extends Game {
  render() {
    return (<Game />);
  }
}

export default WriteGame;
