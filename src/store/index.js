import { configureStore } from "@reduxjs/toolkit";

import { goodsReducer, } from './reducers/goods/goods.slice';
export * from './reducers/goods/goods.slice';


export const store = configureStore({
  reducer: {
      goods: goodsReducer
  },
});