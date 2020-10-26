import { configureStore, applyMiddleware, Comparer, createStore, compose } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk'
import rootReducer from './../reducers/root-reducer';

const middleware = [ReduxThunk]
const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
export default store