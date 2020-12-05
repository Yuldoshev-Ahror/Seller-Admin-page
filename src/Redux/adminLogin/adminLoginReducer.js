import {
  ADMIN_LOGIN_BEGIN,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
} from './adminLoginAction';

const initialState = {
  adminLoginBegin: false,
  adminLoginSuccess: false,
  adminLoginFail: false,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_BEGIN:
      return {
        ...state,
        adminLoginBegin: true,
        adminLoginSuccess: false,
        adminLoginFail: false,
      };
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        adminLoginBegin: false,
        adminLoginSuccess: true,
        adminLoginFail: false,
        data: action.payload,
      };
    case ADMIN_LOGIN_FAIL:
      return {
        ...state,
        adminLoginBegin: false,
        adminLoginFail: true,
        adminLoginSuccess: false,
      };
    default:
      return { ...state };
  }
};
