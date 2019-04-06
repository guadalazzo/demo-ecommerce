import { createStore, applyMiddleware, compose } from 'redux';
import { itemsReducer } from './reducer';
import { logger } from './middlewares/logger';
import thunk from 'redux-thunk';

export const store = createStore(
  itemsReducer, 
  {items:[], query: ""},
  compose(applyMiddleware(logger, thunk),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);