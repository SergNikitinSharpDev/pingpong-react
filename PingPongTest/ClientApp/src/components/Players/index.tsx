import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { PlayersActionCreators, PlayersState } from '../../store/PlayersStore';
import { Player } from '../../models';
import { PlayerForm } from './PlayerForm';
import { PlayersTable } from './PlayersTable';

type OwnProps =
  PlayersState
  & typeof PlayersActionCreators;

type OwnState = {
  selectedPlayer?: Player;
}

class Players extends React.PureComponent<OwnProps, OwnState> {

  constructor(props: OwnProps) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    this.props.requestPlayers();
  }

  addPlayerHandle = (name: string) => {
    this.props.addPlayer(name);
  }

  updatePlayerHandle = (player: Player) => {
    this.props.updatePlayer(player);
  }


  public render() {
    const { selectedPlayer } = this.state;
    return (
      <React.Fragment>
        <h1 id="tabelLabel">Players</h1>
        <PlayerForm 
          player={selectedPlayer} 
          addPlayer={this.addPlayerHandle}
          updatePlayer={this.updatePlayerHandle}
          unselectPlayer={()=> {this.setState({selectedPlayer: undefined})}}
        ></PlayerForm>
        <PlayersTable players={this.props.players} 
          selectPlayer={(selectedPlayer) => this.setState({selectedPlayer})}></PlayersTable>
      </React.Fragment>
    );
  }
}

export default connect(
  (state: ApplicationState) => state.players,
  PlayersActionCreators
)(Players as any);
