import React from 'react';
import { Player, Game } from "../../models";
import { Button } from "reactstrap";

type OwnProps = {
    games: Game[];
    players: Player[];
    selectGame: (game: Game) => void;
    deleteGame: (game: Game) => void;
};

export function GamesTable(props: OwnProps) {
    const { games, players } = props;

    let getPlayer = (id: number): Player => {
        return props.players!.find(p => p.id === id)!;
    }

    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th className="edit-name"></th>
            <th>Date</th>
            <th>Player1</th>
            <th>Player2</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          { players.length > 0 && games!.map((game: Game, index: number) =>
            <tr key={'g-'+index}>
              <td className="d-flex">
                <Button 
                  className="mr-2"
                  onClick={ () => props.deleteGame(game)}>
                    Delete
                </Button>
                <Button 
                  onClick={ () => props.selectGame(game)}>
                    Edit
                </Button>
              </td>
              <td>{new Date(game.date).toDateString()}</td>
              <td>{getPlayer(game.player1Id).name} ({game.playerScore1})</td>
              <td>{getPlayer(game.player2Id).name} ({game.playerScore2})</td>
              <td>{getPlayer(game.winnerId!).name}</td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }