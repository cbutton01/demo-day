import React, { Component } from 'react';
import { Loop, Stage } from 'react-game-kit';
import World from 'matter-js';

class Game extends Component {
    render() {
      return (
        <Loop>
          <Stage width={1024} height={576}>
            
          </Stage>
        </Loop>
      )
    }
  }

  export default Game;