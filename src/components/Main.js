require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import SearchComponent from './SearchComponent';
import ListInfo from './ListInfo';

class AppComponent extends React.Component {
  render() {
    return (
        <div className="index container">
          <div className="row">
            <div className="col-sm-12">
              <SearchComponent />
              <ListInfo />
            </div>
          </div>
        </div>
    );
  }
}

export default AppComponent;
