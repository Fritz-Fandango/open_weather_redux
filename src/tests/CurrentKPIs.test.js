import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import renderer from 'react-test-renderer';
import { formatTime } from '../components/Card';

import CurrentKPIs from '../components/CurrentKPIs';

configure({adapter: new Adapter()});

describe('Testing date formatting', () => {
    const timestamp = 1618308000; // 1/19/1970 10:31:48 AM

    it('should return a valid time string', () => {
        const formattedDate = formatTime(timestamp);

        expect(formattedDate).toBe('10:31:48 AM');
    });
});

describe('Testing CurrentKPIs component', () => {
    const propsObj = {
        dt: 1618308000,
        temp: 275.09,
        feels_like: 279.79,
        pressure: 15,
        wind_speed: 300
    };

    it('renders CurrentKPIs', () => {
        const wrapper = <CurrentKPIs current={propsObj} />;

        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
