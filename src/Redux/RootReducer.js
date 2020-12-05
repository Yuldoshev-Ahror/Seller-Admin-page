import { combineReducers } from 'redux';
import AdminLoginReducer from './adminLogin/adminLoginReducer.js';
import productReducer from './productManagment/productReducer';
// import productIsReducer from './productIsPublish/productIsReducer';
import { loadingBarReducer } from 'react-redux-loading-bar';

export const rootReducer = combineReducers({
  admin: AdminLoginReducer,
  product: productReducer,
  // isPublish: productIsReducer,
  lodingBar: loadingBarReducer,
});
