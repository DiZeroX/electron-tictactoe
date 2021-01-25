import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';
import { TicTacToe } from './game';
import { GameInterface } from './types';
import icon from '../assets/icon.svg';
import TicTacToeBoard from './Board';

// const Hello = () => {
//   return (
//     <div>
//       <div className="Hello">
//         <img width="200px" alt="icon" src={icon} />
//       </div>
//       <h1>electron-react-boilerplate</h1>
//       <div className="Hello">
//         <a
//           href="https://electron-react-boilerplate.js.org/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <button type="button">
//             <span role="img" aria-label="books">
//               📚
//             </span>
//             Read our docs
//           </button>
//         </a>
//         <a
//           href="https://github.com/sponsors/electron-react-boilerplate"
//           target="_blank"
//           rel="noreferrer"
//         >
//           <button type="button">
//             <span role="img" aria-label="books">
//               🙏
//             </span>
//             Donate
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

const TTTClient = Client<GameInterface>({
  game: TicTacToe,
  board: TicTacToeBoard,
  multiplayer: SocketIO({ server: 'localhost:8000' }),
});

const Game = () => (
  <div>
    <TTTClient />
  </div>
);

function AppTest() {
  const [playerID, setPlayerID] = useState('');

  if (playerID === '') {
    return (
      <div>
        <p>Play as</p>
        <button type="button" onClick={() => setPlayerID('0')}>
          Player 0
        </button>
        <button type="button" onClick={() => setPlayerID('1')}>
          Player 1
        </button>
      </div>
    );
  }
  return (
    <div>
      <TTTClient playerID={playerID} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={AppTest} />
      </Switch>
    </Router>
  );
}
