import React from 'react';
import { shallow } from 'enzyme';
import { GamesTable } from '../GamesTable';
import { Player, Game } from '../../../models';
import Players from '../../Players';
it('renders without crashing with no props', () => {
  shallow(<GamesTable players={[]} games={[]} selectGame={()=>{}} deleteGame={() => {}}/>);
});


it('renders without crashing with props', () => {
  const players: Player[] = [
    {id: 0, name: 'Player1', wins: 0},
    {id: 1, name: 'Player2', wins: 10},
    {id: 2, name: 'Player3', wins: 100},
  ]

  const games: Game[] = [
    {date: '2019-11-09', player1Id: 0, player2Id: 1, playerScore1: 10, playerScore2: 20, winnerId: 1},
    {date: '2019-11-20', player1Id: 2, player2Id: 0, playerScore1: 20, playerScore2: 10, winnerId: 2},
  ]
  shallow(<GamesTable players={players} games={games} selectGame={()=>{}} deleteGame={() => {}}/>);
});