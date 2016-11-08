import dispatcher from '../dispatcher/dispatcher.js';
import axios from 'axios';

export function getUserRepos(user){
  axios.get('https://api.github.com/users/' + user + '/repos').then(function(res){
    dispatcher.dispatch({type: 'HANDLE_RESULT', result: res});
  }).catch(function(error){
    dispatcher.dispatch({type: 'HANDLE_ERROR', error: error.response});
  });
}
