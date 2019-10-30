import { Game } from "../../models";

export interface GamesState {
    isLoading: boolean;
    games: Game[];
}