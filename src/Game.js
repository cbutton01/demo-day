import React, { Component } from 'react';
import { Loop, Stage, Sprite } from 'react-game-kit';
import World from 'matter-js';
import testimage from './assets/sprites/test-image.png';

class Game extends Component {
    render() {
      return (
        <Loop>
          <Stage width={1024} height={576}>
            <Sprite offset={[0]} repeat={false} src={testimage}></Sprite>
          </Stage>
        </Loop>
      );
    }
  }

  export default Game;