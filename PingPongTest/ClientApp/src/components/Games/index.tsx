import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { GamesActionCreators, GamesState } from '../../store/GamesStore';
import { Game } from '../../models';
import { GameForm } from './GameForm';
import { PlayersState, PlayersActionCreators } from '../../store/PlayersStore';
import { GamesTable } from './GamesTable';

type OwnProps =
  GamesState
  & PlayersState
  & typeof GamesActionCreators
  & typeof PlayersActionCreators;

type OwnState = {
  selectedGame?: Game;
}

class Games extends React.PureComponent<OwnProps, OwnState> {

  constructor(props: OwnProps) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    this.props.requestGames();
    this.props.requestPlayers();
  }

  addGameHandle = (game: Game) => {
    this.props.addGame(game);
  }

  updateGameHandle = (game: Game) => {
    this.props.updateGame(game);
  }

  public render() {
    const { selectedGame } = this.state;
    const { players, games } = this.props;
    let sortedGames = games.sort((a, b) => a.date.localeCompare(b.date));
    return (
      <React.Fragment>
        <h1 id="tabelLabel">Games</h1>
        <GameForm 
          game={selectedGame} 
          addGame={this.addGameHandle}
          updateGame={this.updateGameHandle}
          unselectGame={()=> {this.setState({selectedGame: undefined})}}
          players={players}
        ></GameForm>
        <GamesTable
          players={players}
          games={sortedGames}
          deleteGame={this.props.deleteGame}
          selectGame={(selectedGame) => this.setState({selectedGame})}
        ></GamesTable>
      </React.Fragment>
    );
  }
}

export default connect(
  (state: ApplicationState) => ({...state.games, ...state.players}),
  {...GamesActionCreators, ...PlayersActionCreators}
)(Games as any);
