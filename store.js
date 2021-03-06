import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root_reducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

let middleware = [thunk]

const configureStore = (preloadedState = {}) => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(...middleware)
    )
};

export default configureStore;