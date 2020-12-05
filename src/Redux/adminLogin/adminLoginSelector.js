import { createSelector } from 'reselect';

const admin = (state) => state.admin;

export const adminLoginBeginMine = createSelector(
  [admin],
  (state) => state.adminLoginBegin
);

export const adminLoginSuccessMine = createSelector(
  [admin],
  (state) => state.adminLoginSuccess
);

export const adminLoginFailMine = createSelector(
  [admin],
  (state) => state.adminLoginFail
);
