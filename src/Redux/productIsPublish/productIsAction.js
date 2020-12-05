import axiosInstance from '../../services/axiosInstance';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const ADMIN_PRODUCT_IS_BEGIN = 'ADMIN_PRODUCT_IS_BEGIN';
export const ADMIN_PRODUCT_IS_SUCCESS = 'ADMIN_PRODUCT_IS_SUCCESS';
export const ADMIN_PRODUCT_IS_FAIL = 'ADMIN_PRODUCT_IS_FAIL';

export const getIsPublish = (id) => async (dispatch) => {
  dispatch({ type: ADMIN_PRODUCT_IS_BEGIN });
  dispatch(showLoading());

  try {
    const response = await axiosInstance().get(
      '/api/v1/products/edit-publish/' + id
    );
    dispatch({ type: ADMIN_PRODUCT_IS_SUCCESS, payload: response });
    dispatch(hideLoading());
  } catch (error) {
    dispatch({ type: ADMIN_PRODUCT_IS_FAIL, payload: error.response });
    dispatch(hideLoading());
  }
};
