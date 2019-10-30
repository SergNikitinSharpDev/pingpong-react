import React from 'react';
import { shallow } from 'enzyme';
import { PlayersTable } from '../PlayersTable';
import { Player } from '../../../models';
it('renders without crashing with no props', () => {
  shallow(<PlayersTable players={[]} selectPlayer={() => {}}/>);
});

it('renders without crashing with props', () => {
  const players: Player[] = [
    {id: 0, name: 'Player1', wins: 0},
    {id: 1, name: 'Player2', wins: 10},
    {id: 2, name: 'Player3', wins: 100},
  ]
  shallow(<PlayersTable players={players} selectPlayer={() => {}}/>);
});