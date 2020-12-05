import axiosInstance from '../../services/axiosInstance';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const ADMIN_LOGIN_BEGIN = 'ADMIN_LOGIN_BEGIN';
export const ADMIN_LOGIN_SUCCESS = 'ADMIN_LOGIN_SUCCESS';
export const ADMIN_LOGIN_FAIL = 'ADMIN_LOGIN_FAIL';

export const adminLogin = ({ email, password }, history) => async (
  dispatch
) => {
  dispatch({ type: ADMIN_LOGIN_BEGIN });
  dispatch(showLoading());

  try {
    const data = {
      email: email,
      password: password,
    };

    const response = await axiosInstance().post('/api/v1/auth/login', data);
    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: response });
    history.push('/dashboard');
    localStorage.setItem('token', response.data.token);
    dispatch(hideLoading());
  } catch (error) {
    console.log(error.response);
    dispatch({ type: ADMIN_LOGIN_FAIL });
    dispatch(hideLoading());
  }
};
