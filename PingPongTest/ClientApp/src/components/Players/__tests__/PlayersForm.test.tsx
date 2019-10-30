import React from 'react';
import { shallow } from 'enzyme';
import { PlayerForm } from '../PlayerForm';
it('renders without crashing', () => {
  shallow(<PlayerForm addPlayer={() => {}} unselectPlayer={() => {}} updatePlayer={() => {}}/>);
});