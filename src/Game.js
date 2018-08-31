import React, { Component } from 'react';
import { Loop, Stage, Sprite } from 'react-game-kit';
import testimage from './assets/sprites/test-image.png';

class Game extends Component {
    render() {
      return (
        <Loop>
          <Stage dimensions={[0]} width={1024} height={576}>
            <Sprite scale={1} offset={[0]} repeat={false} src="./assets/sprites/test-image.png"></Sprite>
          </Stage>
        </Loop>
      );
    }
  }

  export default Game;