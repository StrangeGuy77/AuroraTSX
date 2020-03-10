import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import promise from 'redux-promise-middleware';

const middlewares = [logger, promise];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
