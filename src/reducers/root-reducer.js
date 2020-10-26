import { combineReducers } from '@reduxjs/toolkit';
import AllPostReducer from './reducers_post'
import SelectedPostReducer from './reducer_selectPost'


const rootReducer = combineReducers({
    AllPost: AllPostReducer,
    SelectedPost: SelectedPostReducer
})


export default rootReducer