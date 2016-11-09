import * as React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Test from './index';


describe('test', () => {
  it('should render snapshot', () => {
    const tree = shallowToJson(shallow(<Test />));
    
    expect(tree).toMatchSnapshot();
  });
});
