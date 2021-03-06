import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';
import { reducer as formReducer } from 'redux-form';
import counter from './counter';
import auth from './auth';

export default combineReducers({
 counter,
 auth,
 router: routerStateReducer,
 form: formReducer
});
