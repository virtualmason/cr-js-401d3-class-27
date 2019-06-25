import React from 'react';
import renderer from 'react-test-renderer';

import Thing from '.';

describe('Thing Component', () => {
  it('matches snapshot without props', () => {
    const tree = renderer.create(<Thing />).toJSON()
    expect(tree).toMatchSnapshot();
  })
});
