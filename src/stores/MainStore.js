import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher.js';
// import axios from 'axios';

class MainStore extends EventEmitter {
  constructor() {
    super();

    this.appData = {
      repos: [],
      requestDetails: {
        apiNotResponding: false,
        userNotFound: false,
        searchInitialized: false
      }
    }
  }


  updateComponentInfo(data){
    if(data.status === -1){
      this.appData.requestDetails.apiNotResponding = true;
      this.appData.repos = [];
    }
    if(data.status === 404){
      this.appData.requestDetails.userNotFound = true;
      this.appData.repos = [];
    }
    if(data.status === 200){
      this.appData.requestDetails.userNotFound = false;
      this.appData.requestDetails.apiNotResponding = false;
      this.appData.requestDetails.searchInitialized = true;
      this.appData.repos = data.data;
    }

    this.emit('change');
  }

  getData(){
    return this.appData;
  }

  handleActions(action){
    switch(action.type){
      case 'HANDLE_RESULT': {
        this.updateComponentInfo(action.result);
        break
      }
      case 'HANDLE_ERROR': {
        this.updateComponentInfo(action.error);
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




// github user with no repos: asdasda
