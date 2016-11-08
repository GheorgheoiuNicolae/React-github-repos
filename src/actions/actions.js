import dispatcher from '../dispatcher/dispatcher.js';
import axios from 'axios';

export function getUserRepos(user){
  axios.get('https://api.github.com/users/' + user + '/repos').then(function(res){
    dispatcher.dispatch({type: 'HANDLE_RESULT', result: res});
  }).catch(function(error){
    console.log('error', error.response);
    dispatcher.dispatch({type: 'HANDLE_ERROR', error: error.response});
    // if(error.response.status === 404){
    //   dispatcher.dispatch({type: 'NOT_FOUND', notFound: true});
    // }
    // if(error.response.status === -1){
    //   dispatcher.dispatch({type: 'API_NOT_RESPONDING', apiNotResponding: true});
    // }
  });
}
