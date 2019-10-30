import { PlayersState } from "./PlayersStore/state";
import { PlayersReducer } from "./PlayersStore";
import { GamesReducer } from "./GamesStore";

export interface ApplicationState {
    players: PlayersState;
    games: PlayersState;
}

export const reducers = {
    players: PlayersReducer,
    games: GamesReducer
};

export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
