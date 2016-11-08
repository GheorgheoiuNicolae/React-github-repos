/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import ListInfo from 'components/ListInfo';

describe('ListInfoComponent', () => {
  let ListInfoComponent;

  beforeEach(() => {
    ListInfoComponent = createComponent(ListInfo);
  });

  it('should have its component name as default className', () => {
    expect(ListInfoComponent.props.className).to.equal('row results');
  });
});
