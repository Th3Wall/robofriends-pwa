import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper, wrapper2, wrapper3;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isLoading: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>)
})

it('expect to run a MainPage component without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@snow.com'
        }],
        searchField: 'john',
        isLoading: false
    }
    wrapper2 = shallow(<MainPage {...mockProps2}/>)
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@snow.com'
    }]);
})

it('filters robots correctly2', () => {
    const mockProps3 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@snow.com'
        }],
        searchField: 'a',
        isLoading: false
    }
    const filteredRobots = [];
    wrapper3 = shallow(<MainPage {...mockProps3}/>)
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
})