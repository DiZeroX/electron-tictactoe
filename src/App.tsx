import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Client } from 'boardgame.io/react';
import { SocketIO } from 'boardgame.io/multiplayer';
import { TicTacToe } from './game';
import { GameInterface } from './types';
import TicTacToeBoard from './Board';
import Singleplayer from './singleplayer';
// import Multiplayer from './multiplayer';
import Spectator from './spectator';
// import Authenticated from './authenticated';
import Bots from './bots';
// import AdvancedAI from './advanced-ai';
import GameMenu from './GameMenu';

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

// const Game = () => (
//   <div>
//     <TTTClient />
//   </div>
// );

function Multiplayer() {
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
        <Route exact path="/" component={GameMenu} />
        <Route path="/spectator" text="Spectator" component={Spectator} />
        <Route path="/bots" text="Singleplayer vs AI" component={Bots} />
        <Route
          path="/singleplayer"
          text="Singleplayer"
          component={Singleplayer}
        />
        <Route path="/multiplayer" text="Multiplayer" component={Multiplayer} />
      </Switch>
    </Router>
  );
}
