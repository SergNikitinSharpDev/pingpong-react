import { Player } from "./Player";

export interface Game {
    id?: number;
    date: string;

    playerScore1: number;
    playerScore2: number;

    player1Id: number;
    player2Id: number;
    winnerId?: number;
}