import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import renderer from 'react-test-renderer';

import {
    formatDate,
    formatTime,
} from '../components/Card';

import Card from '../components/Card';

configure({adapter: new Adapter()});

describe('Testing date formatting', () => {
    const timestamp = 1618308000; // 1/19/1970 10:31:48 AM

    it('should return a valid date string', () => {
        const formattedDate = formatDate(timestamp);

        expect(formattedDate).toBe('1/19/1970');
    });

    it('should return a valid time string', () => {
        const formattedDate = formatTime(timestamp);

        expect(formattedDate).toBe('10:31:48 AM');
    });

});

describe('Testing Card component', () => {
    const propsObj = {
        key: 1618308000,
        dateTime: 1618308000,
        humidity: 15,
        icon: '10d',
        minTemp: 275.09,
        maxTemp: 279.79,
        sunrise: 1618282134,
        sunset: 1618333901
    };

    it('renders Card', () => {
        const wrapper = <Card props={propsObj} />;

        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });
})
