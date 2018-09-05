import React, { Component } from 'react';
import { Loop, Stage, Sprite } from 'react-game-kit';
import testimage from './assets/sprites/test-image.png';

class Game extends Component {
    render() {
      return (
        <Loop>
          <Stage scale={1} dimensions={[1024, 576]} width={1024} height={576}>
            <Sprite state={0} steps={[0]} scale={1} repeat={false} ticksPerFrame={0} src={testimage} />
          </Stage>
        </Loop>
      );
    }
  }

  export default Game;