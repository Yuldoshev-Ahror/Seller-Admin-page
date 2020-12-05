import axiosInstance from '../../services/axiosInstance';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const ADMIN_PRODUCT_BEGIN = 'ADMIN_PRODUCT_BEGIN';
export const ADMIN_PRODUCT_SUCCESS = 'ADMIN_PRODUCT_SUCCESS';
export const ADMIN_PRODUCT_FAIL = 'ADMIN_PRODUCT_FAIL';

export const getProducts = () => async (dispatch) => {
  dispatch({ type: ADMIN_PRODUCT_BEGIN });
  dispatch(showLoading());

  try {
    const response = await axiosInstance().get('/api/v1/products/all');
    dispatch({ type: ADMIN_PRODUCT_SUCCESS, payload: response });
    dispatch(hideLoading());
  } catch (error) {
    dispatch({ type: ADMIN_PRODUCT_FAIL, payload: error.response });
    dispatch(hideLoading());
  }
};
