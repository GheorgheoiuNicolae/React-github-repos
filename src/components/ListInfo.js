import React from 'react';
import mainStore from '../stores/MainStore';

class ListInfo extends React.Component {

  componentWillMount() {
    this.setState({
      repos: mainStore.getRepos(),
      requestInfo: mainStore.getRequestDetails()
    });

    mainStore.on('change', () => {
      this.setState({
        repos: mainStore.getRepos()
      });
    });
  }

  render() {
    const styles = {
      color: '#000'
    }

    let userdata;
    if(this.state.repos.length){
      userdata = (
        <div className="col-sm-4 user-data">
          <img src={this.state.repos[0].owner.avatar_url} className="img-responsive"/>
          <h3>{ this.state.repos[0].owner.login }</h3>
        </div>
      )
    } else {
      userData = ( <p className="text-danger">The user has no repos.</p> )
    }

    return (
        <div className='row results'>
          { userdata }

          <div className="col-sm-8 user-repos">
              {this.state.repos.map(function(repo, index){
                return (
                  <div className="panel panel-default" key={ index }>
                    <div className="panel-heading">
                      <b>{ repo.name }</b>
                      <a href="https://github.com/{repo.full_name}" className="pull-right small" target="_blank">view</a>
                    </div>
                    <div className="panel-body">
                      <p style={styles} className="text-dark">{ repo.description }</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

    );
  }
}

export default ListInfo;

