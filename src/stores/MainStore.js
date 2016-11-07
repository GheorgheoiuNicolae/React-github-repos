import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher.js';
// import axios from 'axios';

class MainStore extends EventEmitter {
  constructor() {
    super();
    this.repos = [];
    this.requestDetails = {
      apiNotResponding: false,
      userNotFound: false
    };
  }


  createListOfRepos(repos){
    this.repos = repos;
    this.emit('change');
  }

  getRepos(){
    return this.repos;
  }

  getRequestDetails(data){
    console.log('data', data);
  }

  handleActions(action){
    switch(action.type){
      case 'GET_USER_REPOS': {
        this.createListOfRepos(action.repos);
        break
      }

      default: {
      }
    }
  }
}

const mainStore = new MainStore();

dispatcher.register(mainStore.handleActions.bind(mainStore));

export default mainStore;
