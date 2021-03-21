import { createStore, combineReducers } from 'redux';
import infosReducer from './infos';

const rootReducer = combineReducers({
  infos: infosReducer,
});

const initialState = {
  infos: [],
};

const store = createStore(rootReducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
