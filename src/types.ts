import { PlayerID, Ctx } from 'boardgame.io';

export interface Player {
  id: number;
}

export interface GameInterface {
  players: { [key: string]: Player };
  cells: Array<PlayerID>;
}

// export interface BoardProps<GameInterface> {
export interface BoardProps {
  G: GameInterface;
  ctx: Ctx;
  // moves: MoveMap<GameInterface, Ctx>;
  moves: any;
  // S: State<GameInterface, Ctx>;
  playerID?: PlayerID | null;
  isActive: boolean;
}

export interface IGameModeInfo {
  mode: GameMode;
}

export enum GameMode {
  AI = 'AI',
  OnlineFriend = 'online',
  LocalFriend = 'local',
}
