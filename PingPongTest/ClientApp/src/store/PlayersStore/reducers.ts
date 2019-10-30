import { Action, Reducer } from 'redux';
import { PlayersState } from './state';
import { PlayerAction } from './actions';
import { REQUEST_PLAYERS, RECEIVE_PLAYERS, ADD_PLAYER, UPDATE_PLAYER } from './actionTypes';

const initState: PlayersState = { players: [], isLoading: false };

export const PlayersReducer: Reducer<PlayersState> = (state: PlayersState | undefined, incomingAction: Action): PlayersState => {
    if (state === undefined) {
        return initState;
    }

    const action = incomingAction as PlayerAction;
    switch (action.type) {
        case REQUEST_PLAYERS:
            return {
                ...state,
                isLoading: true
            };
        case RECEIVE_PLAYERS:
            return {
                players: action.players,
                isLoading: false
            };
        case ADD_PLAYER:
            return {
                ...state,
                players: [...state.players, action.player]
            };
        case UPDATE_PLAYER:
            const player = state.players.find(p => p.id === action.player.id);
            player!.name = action.player.name;
            return {
                ...state,
                players: [...state.players]
            };
    }

    return state;
};
