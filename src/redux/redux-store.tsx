import { combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware  from 'redux-thunk';
import usersReducer from './users-reducer';
const reducers = combineReducers({
    users: usersReducer
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;