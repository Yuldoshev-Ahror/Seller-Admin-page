import {
  ADMIN_PRODUCT_BEGIN,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FAIL,
} from './productAction';

const initialState = {
  adminProductBegin: false,
  adminProductSuccess: false,
  adminProductFail: false,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_PRODUCT_BEGIN:
      return {
        ...state,
        adminProductBegin: true,
        adminProductSuccess: false,
        adminProductFail: false,
      };
    case ADMIN_PRODUCT_SUCCESS:
      return {
        ...state,
        adminProductBegin: false,
        adminProductSuccess: true,
        adminProductFail: false,
        data: action.payload,
      };
    case ADMIN_PRODUCT_FAIL:
      return {
        ...state,
        adminProductBegin: false,
        adminProductSuccess: false,
        adminProductFail: true,
      };
    default:
      return { ...state };
  }
};
