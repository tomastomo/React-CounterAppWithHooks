import { shallow } from "enzyme"
import CounterApp from "../components/CounterApp"

describe('Tests for <CounterApp />', () => {

    let wrapper = shallow( <CounterApp/>);

    beforeEach( () => {
        wrapper = shallow( <CounterApp/>);
    })

    test('should increment with button +1', () => {
        
        const btn1 = wrapper.find('button').at(0).simulate('click');

        const counter = wrapper.find('h2').text().trim();

        expect(counter).toBe('11');
    })

    test('should increment with button -1', () => {
        
        const btn1 = wrapper.find('button').at(2).simulate('click');

        const counter = wrapper.find('h2').text().trim();

        expect(counter).toBe('9');
    })
    
})
