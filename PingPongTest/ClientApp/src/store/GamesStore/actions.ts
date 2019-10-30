import { AppThunkAction } from './../';
import { Game } from '../../models';
import { ADD_GAME, RECEIVE_GAMES, REQUEST_GAMES, UPDATE_GAME, DELETE_GAME } from './actionTypes';

interface RequestGamesAction {
    type: typeof REQUEST_GAMES;
}

interface AddGameAction {
    type: typeof ADD_GAME;
    game: Game;
}

interface UpdateGameAction {
    type: typeof UPDATE_GAME;
    game: Game;
}

interface DeleteGameAction {
    type: typeof DELETE_GAME;
    id: number;
}

interface ReceiveGamesAction {
    type: typeof RECEIVE_GAMES;
    games: Game[];
}

export type GameAction = ReceiveGamesAction
    | AddGameAction | UpdateGameAction | RequestGamesAction | DeleteGameAction;


export const GamesActionCreators = {
    requestGames: (): AppThunkAction<GameAction> => (dispatch, getState) => {
        const appState = getState();
        if (appState && appState.games) {
            fetch(`api/games`)
                .then(response => response.json() as Promise<Game[]>)
                .then(data => {
                    dispatch({ type: RECEIVE_GAMES, games: data });
                });

            dispatch({ type: REQUEST_GAMES });
        }
    },

    addGame: (game: Game): AppThunkAction<GameAction> => (dispatch, getState) => {
        const appState = getState();
        if (appState && appState.games) {
            fetch(`api/games`, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(game)
                })
                .then(response => response.json() as Promise<Game>)
                .then(data => {
                    dispatch({ type: UPDATE_GAME, game: data });
                });
        }
    },
    updateGame: (game: Game): AppThunkAction<GameAction> => (dispatch, getState) => {
        const appState = getState();
        if (appState && appState.games) {
            fetch(`api/games/${game.id}`, 
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(game)
                })
                .then(data => {
                    dispatch({ type: UPDATE_GAME, game });
                });
        }
    },
    deleteGame: (game: Game): AppThunkAction<GameAction> => (dispatch, getState) => {
        const appState = getState();
        if (appState && appState.games) {
            fetch(`api/games/${game.id}`, 
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(data => {
                    dispatch({ type: DELETE_GAME, id: game.id! });
                });
        }
    }
};