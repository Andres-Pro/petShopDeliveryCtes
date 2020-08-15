import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';



const sagaMiddleware = createSagaMiddleware();
const middlewares = [
    sagaMiddleware,
    routerMiddleware(),
    ...(() => {
        if (process.env.NODE_ENV === 'development') return [logger];
        return [];
    })(),
];
export default middlewares;
