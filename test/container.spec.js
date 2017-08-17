import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import {Container} from '../src/components/Container.jsx';
import {UrlTable} from '../src/components/UrlTable.jsx';
import {UrlFilter} from '../src/components/UrlFilter.jsx';
import {UrlAdd} from '../src/components/UrlAdd.jsx';

describe('<Container />', () => {
  it('should render UrlTable, UrlFilter and UrlAdd components', () => {
    const wrapper = mount(<Container />);
    expect(wrapper.find(UrlTable)).to.have.length(1);
    expect(wrapper.find(UrlFilter)).to.have.length(1);
    expect(wrapper.find(UrlAdd)).to.have.length(1);
  });
})
