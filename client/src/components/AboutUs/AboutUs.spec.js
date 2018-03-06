import React from 'react';
import AboutUs from './AboutUs';
import { shallow } from 'enzyme';

describe('AboutUs tests', () => {
    it('should contain: About Us', () => {
        const component = shallow(<AboutUs />);
        expect(component.contains(<h2>About us</h2>)).toBe(true);
    })

})