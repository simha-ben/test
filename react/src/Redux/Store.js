import { createStore, combineReducers, applyMiddleware } from 'redux';
import UserReducer from './Reducers/UserReducer';
import { getUsersFromServer } from './Middleware/crud';
import {action} from './Action';




const reducer = combineReducers({ UserReducer })
const store = createStore(reducer, applyMiddleware(getUsersFromServer))
window.store = store
// debugger;
// store.dispatch({type:"SET_TASKS",payload:JSON.parse(localStorage.getItem("tasks"))})
// store.dispatch(actions.setTasks(JSON.parse(localStorage.getItem("tasks"))))

export default store



