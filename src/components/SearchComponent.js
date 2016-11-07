
import React from 'react';
import * as action from '../actions/actions';
// import mainStore from '../stores/MainStore';

class SearchComponent extends React.Component {

  componentWillMount() {
    this.setState({
      user: ''
    })
  }

  search(){
    let githubUser = this.state.user;
    action.getUserRepos(githubUser);
  }

  handleChange(e){
    let val = e.target.value;
    this.setState({
      user: val
    });
  }

  handleKeypress(e){
    if (e.which === 13 || e.keyCode === 13) {
      this.search()
    }
  }


  render() {
    return (
        <div className="search-component jumbotron text-center">
          <h3>Repo finder</h3>
          <div className="form-group">
            <input
                value={this.props.user}
                onChange={this.handleChange.bind(this)}
                onKeyPress={this.handleKeypress.bind(this)}
                type="text"
                className="form-control search"
                placeholder="Github username" />

            <button
              onClick={this.search.bind(this)}
              className="btn btn-success"
              type="button">
                  Search
            </button>
          </div>
        </div>
    );
  }
}

export default SearchComponent;
