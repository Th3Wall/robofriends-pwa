import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to run a CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'King',
            email: 'amilcare@test.snow'
        }
    ]
    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})