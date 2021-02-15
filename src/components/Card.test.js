import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to run a Card component', () => {
    expect(shallow(<Card/>)).toMatchSnapshot();
})