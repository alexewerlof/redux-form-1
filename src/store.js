import {createStore, combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';

var reducer = combineReducers({
  form: reduxFormReducer
});

export default createStore(reducer, window.devToolsExtension && window.devToolsExtension());
