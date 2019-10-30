import { Player } from "../../models";

export interface PlayersState {
    isLoading: boolean;
    players: Player[];
}