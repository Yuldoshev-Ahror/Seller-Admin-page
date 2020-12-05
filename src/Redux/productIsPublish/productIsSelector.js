import { createSelector } from 'reselect';

const admin = (state) => state.product;

export const adminProductBeginMine = createSelector(
  [admin],
  (state) => state.adminProductBegin
);

export const adminProductSuccessMine = createSelector(
  [admin],
  (state) => state.adminProductSuccess
);

export const adminProductFailMine = createSelector(
  [admin],
  (state) => state.adminProductFail
);

export const adminProductDataMine = createSelector(
  [admin],
  (state) => state.data
);
