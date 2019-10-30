import React from 'react';
import { shallow } from 'enzyme';
import { GameForm } from '../GameForm';
it('renders without crashing  with no props', () => {
  shallow(<GameForm players={[]} addGame={() => {}}  updateGame={() => {}} unselectGame={() => {}}/>);
});