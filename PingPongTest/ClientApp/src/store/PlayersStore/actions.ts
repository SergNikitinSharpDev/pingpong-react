import { AppThunkAction } from './../';
import { Player } from '../../models';
import { RECEIVE_PLAYERS, REQUEST_PLAYERS, ADD_PLAYER, UPDATE_PLAYER } from './actionTypes';

interface RequestPlayersAction {
    type: typeof REQUEST_PLAYERS;
}

interface AddPlayerAction {
    type: typeof ADD_PLAYER;
    player: Player;
}

interface UpdatePlayerAction {
    type: typeof UPDATE_PLAYER;
    player: Player;
}

interface ReceivePlayersAction {
    type: typeof RECEIVE_PLAYERS;
    players: Player[];
}

export type PlayerAction = RequestPlayersAction 
    | ReceivePlayersAction | AddPlayerAction | UpdatePlayerAction;


export const PlayersActionCreators = {
    requestPlayers: (): AppThunkAction<PlayerAction> => (dispatch, getState) => {
        const appState = getState();
        if (appState && appState.players) {
            fetch(`api/players`)
                .then(response => response.json() as Promise<Player[]>)
                .then(data => {
                    dispatch({ type: RECEIVE_PLAYERS, players: data });
                });

            dispatch({ type: REQUEST_PLAYERS });
        }
    },

    addPlayer: (name: string): AppThunkAction<PlayerAction> => (dispatch, getState) => {
        const appState = getState();
        if (appState && appState.players) {
            fetch(`api/players`, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name})
                })
                .then(response => response.json() as Promise<Player>)
                .then(data => {
                    dispatch({ type: ADD_PLAYER, player: data });
                });
        }
    },
    updatePlayer: (player: Player): AppThunkAction<PlayerAction> => (dispatch, getState) => {
        const appState = getState();
        if (appState && appState.players) {
            fetch(`api/players/${player.id}`, 
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(player)
                })
                .then(data => {
                    dispatch({ type: UPDATE_PLAYER, player });
                });
        }
    }
};