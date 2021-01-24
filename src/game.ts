/* eslint-disable consistent-return */
import { Game, Ctx, PlayerID } from 'boardgame.io';
import { INVALID_MOVE } from 'boardgame.io/core';
import { GameInterface } from './types';

// Return true if `cells` is in a winning configuration.
function isVictory(cells: Array<PlayerID>): boolean {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isRowComplete = (row: Array<number>) => {
    const symbols = row.map((i: number) => cells[i]);
    return symbols.every((i: PlayerID) => i !== null && i === symbols[0]);
  };

  return positions.map(isRowComplete).some((i: boolean) => i === true);
}

// Return true if all `cells` are occupied.
function IsDraw(cells: Array<PlayerID>): boolean {
  return cells.filter((c: PlayerID) => c === null).length === 0;
}

// eslint-disable-next-line import/prefer-default-export
export const TicTacToe: Game<GameInterface> = {
  setup: () => ({ cells: Array(9).fill(null) }),

  turn: {
    moveLimit: 1,
  },

  moves: {
    clickCell: (G: GameInterface, ctx: Ctx, id: number) => {
      if (G.cells[id] !== null) {
        return INVALID_MOVE;
      }
      G.cells[id] = ctx.currentPlayer;
    },
  },

  endIf: (G: GameInterface, ctx: Ctx) => {
    if (isVictory(G.cells)) {
      return { winner: ctx.currentPlayer };
    }
    if (IsDraw(G.cells)) {
      return { draw: true };
    }
  },

  ai: {
    enumerate: (G: GameInterface, ctx: Ctx) => {
      const moves = [];
      for (let i = 0; i < 9; i += 1) {
        if (G.cells[i] === null) {
          moves.push({ move: 'clickCell', args: [i] });
        }
      }
      return moves;
    },
  },
};
