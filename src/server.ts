/* eslint-disable import/extensions */
import { Server } from 'boardgame.io/server';
import { TicTacToe } from './game';
// const { TicTacToe } = require('./game');

const server = Server({ games: [TicTacToe] });

server.run(8000);

// import { Server } from 'boardgame.io/server';
// import TicTacToe from './src/tic-tac-toe/game';
// import Chess from './src/chess/game';

// const PORT = process.env.PORT || 8000;
// const server = Server({ games: [TicTacToe, Chess] });
// server.run(PORT, () => {
//   console.log(`Serving at: http://localhost:${PORT}/`);
// });
