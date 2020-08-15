/* eslint-disable object-shorthand */
import {
    createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'core/history';
import middlewares from 'core/middlewares';
import rootSaga from 'core/store/sagas';
import { Home } from 'core/store/reducers';


const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    home: Home,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState) => {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                ...middlewares,
            ),
        ),

    );
    return store;
};

const store = configureStore();
const [sagaMiddleware] = middlewares;
sagaMiddleware.run(rootSaga);

export default store;
