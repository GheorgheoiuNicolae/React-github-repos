/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;
import createComponent from 'helpers/shallowRenderHelper';

import Search from 'components/SearchComponent';

describe('SearchComponent', () => {
  let SearchComponent;

  beforeEach(() => {
    SearchComponent = createComponent(Search);
  });

  it('should have its component name as default className', () => {
    expect(SearchComponent.props.className).to.equal('search-component');
  });
});
