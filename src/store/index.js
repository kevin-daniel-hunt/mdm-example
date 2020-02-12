/* this store is complete overkill, just an example */

import { createStore } from 'redux';

function device(state = null, action) {
  switch (action.type) {
    case 'SET':
      return action.device
    case 'RETURN':
      return null;
    default:
      return state;
  }
}

const store = createStore(device);

export default store;