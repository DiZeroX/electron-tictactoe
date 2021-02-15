import React from 'react';
import { Link } from 'react-router-dom';

function GameMenu() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/multiplayer">Multiplayer</Link>
        </li>
        <li>
          <Link to="/singleplayer">Singleplayer</Link>
        </li>
      </ul>
    </div>
  );
}

export default GameMenu;
