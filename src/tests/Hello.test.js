import React from 'react';
import { render } from "@testing-library/react";
import  { shallow } from 'enzyme';
import Hello from '../components/Hello';
import '@testing-library/jest-dom';


describe('Test in <Hello>', () => {
    test('should show Hi from React', () => {
        
            const w = 'Hi From React';
            const wrapper = shallow(<Hello welcome={w}/>)

            expect(wrapper).toMatchSnapshot();
        
    });

    test('should show the subtitle', () => {
        const w = 'Hi From React';
        const s = 'Hi subtitle'

        const wrapper = shallow(
        <Hello 
            welcome={w}
            subtitle={s}
        />);
        
        const text = wrapper.find('p').text();
        expect(text).toBe(s);
    })

    
    
    
})
