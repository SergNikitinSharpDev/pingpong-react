import { Action, Reducer } from 'redux';
import { GamesState } from './state';
import { GameAction } from './actions';
import { REQUEST_GAMES, RECEIVE_GAMES, ADD_GAME, UPDATE_GAME, DELETE_GAME } from './actionTypes';

const initState: GamesState = { games: [], isLoading: false };

export const GamesReducer: Reducer<GamesState> = (state: GamesState | undefined, incomingAction: Action): GamesState => {
    if (state === undefined) {
        return initState;
    }

    const action = incomingAction as GameAction;
    switch (action.type) {
        case REQUEST_GAMES:
            return {
                ...state,
                isLoading: true
            };
        case RECEIVE_GAMES:
            return {
                games: action.games,
                isLoading: false
            };
        case UPDATE_GAME:
            const games = state.games.filter(g => g.id !== action.game.id);
            return {
                ...state,
                games: [...games, action.game]
            };
        case ADD_GAME:
            return {
                ...state,
                games: [...state.games, action.game]
            };
        case DELETE_GAME:
                return {
                    ...state,
                    games: [...state.games.filter(g => g.id !== action.id)]
                };
    }

    return state;
};
