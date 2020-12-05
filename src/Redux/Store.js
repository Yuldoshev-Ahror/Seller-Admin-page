import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './RootReducer.js';
import thunk from 'redux-thunk';
import { loadingBarMiddleware } from 'react-redux-loading-bar';

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, loadingBarMiddleware())
);
