import React from 'react';
import { Player } from "../../models";
import { Button } from "reactstrap";

type OwnProps = {
    players: Player[];
    selectPlayer: (player: Player) => void;
};

export function PlayersTable(props: OwnProps) {
    const { players } = props;

    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th className="edit-name"></th>
            <th>Name</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody>
          { players!.map((player: Player, index: number) =>
            <tr key={player.id}>
              <td>
                <Button 
                  onClick={ () => props.selectPlayer(player)}>
                    Edit
                </Button>
              </td>
              <td>{player.name}</td>
              <td>{player.wins}</td>
            </tr>
          )}
        </tbody>
      </table>

    );
  }