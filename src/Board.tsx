/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Ctx, MoveMap, PlayerID, State, Game } from 'boardgame.io';
import { BoardProps } from 'boardgame.io/react';
import React from 'react';
import { GameInterface } from './types';
import xToken from '../assets/tokens/X_mark.png';

const path = require('path');
// export default class TicTacToeBoard extends React.Component<
//   BoardProps<GameInterface>
// > {
export default class TicTacToeBoard extends React.Component<
  BoardProps<GameInterface>
> {
  onClick = (id: number) => () => {
    // this.props.moves.clickCell(id);
    const {
      moves: { clickCell },
    } = this.props;
    clickCell(id);
  };

  render() {
    const {
      ctx: { gameover },
      G: { cells },
    } = this.props;
    let winner;

    if (gameover) {
      winner =
        gameover.winner !== undefined ? (
          <div id="winner">Winner: {gameover.winner}</div>
        ) : (
          <div id="winner">Draw!</div>
        );
    }

    const cellStyle = {
      border: '1px solid #555',
      width: '50px',
      height: '50px',
      lineHeight: '50px',
      // textAlign: 'center',
    };

    const tbody = [];
    for (let i = 0; i < 3; i += 1) {
      const cellsTest = [];
      for (let j = 0; j < 3; j += 1) {
        const id = 3 * i + j;
        cellsTest.push(
          <td style={cellStyle} key={id} onClick={() => this.onClick(id)}>
            {cells[id] === '0' ? (
              <img src={xToken} alt="X" />
            ) : (
              <img
                src={path.join(__dirname, 'assets', 'tokens', 'x2.png')}
                alt="O"
              />
            )}
          </td>
        );
      }
      tbody.push(<tr key={i}>{cellsTest}</tr>);
    }

    return (
      <div>
        <table id="board">
          <tbody>{tbody}</tbody>
        </table>
        {winner}
      </div>
    );
  }
}
