import React from 'react';
import mainStore from '../stores/MainStore';

class ListInfo extends React.Component {

  componentWillMount() {
    this.setState({
      data: mainStore.getData()
    });

    mainStore.on('change', () => {
      this.setState({
        data: mainStore.getData()
      });
    });
  }

  render() {
    const styles = {
      color: '#000'
    }

    let userData;
    if(this.state.data.repos.length){
      userData = (
        <div className="col-sm-4 user-data">
          <img src={this.state.data.repos[0].owner.avatar_url} className="img-responsive"/>
          <h3>{ this.state.data.repos[0].owner.login }</h3>
        </div>
      )
    } else if(this.state.data.requestDetails.searchInitialized && !this.state.data.requestDetails.userNotFound && this.state.data.requestDetails.apiNotResponding){
      userData = ( <p className="text-danger text-center">The user has no repos.</p> )
    } else if(this.state.data.requestDetails.userNotFound){
      userData = ( <p className="text-danger text-center">User not found.</p> )
    } else if(this.state.data.requestDetails.apiNotResponding){
      userData = ( <p className="text-danger text-center">Github API is not responding.</p> )
    }

    console.log(this.state)
    return (
        <div className='row results'>
          { userData }

          <div className="col-sm-8 user-repos">
              {this.state.data.repos.map(function(repo, index){
                return (
                  <div className="panel panel-default" key={ index }>
                    <div className="panel-heading">
                      <b>{ repo.name }</b>
                      <a href="https://github.com/{repo.full_name}" className="pull-right small" target="_blank">view</a>
                    </div>
                    <div className="panel-body">
                      <p style={styles} >{ repo.description }</p>
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

