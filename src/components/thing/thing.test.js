/* globals shallow, mount, render */
import React from 'react';
import renderer from 'react-test-renderer';

import Thing from '.';

describe('Thing Component', () => {
  it('matches snapshot without props', () => {
    const tree = renderer.create(<Thing />).toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('can shallowly render without props', () => {
    let thing = shallow(<Thing />);
    expect(thing.find('span').exists()).toBe(true);

    // <Thing2 /> contains a div but is not expanded!
    expect(thing.find('div').exists()).toBe(false);
  })

  it('can mount without props', () => {
    let thing = mount(<Thing />);

    let button = thing.find('span');
    expect(button.exists()).toBe(true);
    expect(button.is('.thing')).toBe(true);

    expect(thing.find('div').exists()).toBe(true);
    expect(thing.find('div').text()).toBe('Thing 2');

    expect(thing.state('flag')).toBe(true);
    expect(button.text()).toBe('Thing (Flag = On)');

    button.simulate('click');
    expect(thing.state('flag')).toBe(false);
    expect(button.text()).toBe('Thing (Flag = Off)');
  });
});
