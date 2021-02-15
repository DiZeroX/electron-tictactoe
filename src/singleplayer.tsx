import React from 'react';
import { Client } from 'boardgame.io/react';
import { Debug } from 'boardgame.io/debug';
import { TicTacToe } from './game';
import TicTacToeBoard from './Board';

const App = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  debug: { impl: Debug },
});

const Singleplayer = () => (
  <div>
    <h1>Singleplayer</h1>
    <App matchID="single" />
  </div>
);

export default Singleplayer;
