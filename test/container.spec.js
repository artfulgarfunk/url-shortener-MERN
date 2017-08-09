import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Container from '../src/components/container.jsx';
import InputArea from '../src/components/InputArea.jsx';
import OutputArea from '../src/components/OutputArea.jsx';

describe('<Container />', () => {
  it('should render InputArea and OutputArea', function () {
    const wrapper = shallow(<Container/>);
    expect(wrapper.containsAllMatchingElements([
      <InputArea/>,
      <OutputArea/>
    ])).to.equal(true);
  });
});
