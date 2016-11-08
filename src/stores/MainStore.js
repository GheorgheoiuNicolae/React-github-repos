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
    console.log('asdasdasd', data)
    if(data.status === -1){
      console.log('api not responding');
      this.appData.requestDetails.apiNotResponding = true;
      this.appData.repos = [];
      console.log('this.appData', this.appData);
    }
    if(data.status === 404){
      console.log('user not found');
      this.appData.requestDetails.userNotFound = true;
      this.appData.repos = [];
      console.log('this.appData', this.appData);
    }
    if(data.status === 200){
      console.log('found user');
      this.appData.requestDetails.userNotFound = false;
      this.appData.requestDetails.apiNotResponding = false;
      this.appData.requestDetails.searchInitialized = true;
      this.appData.repos = data.data;
      console.log('this.appData', this.appData);
    }

    this.emit('change');
  }

  getData(){
    return this.appData;
  }

  handleActions(action){
    switch(action.type){
      case 'HANDLE_RESULT': {
        console.log('handle result', action);
        this.updateComponentInfo(action.result);
        break
      }
      case 'HANDLE_ERROR': {
        console.log('handle error', action.error);
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
