import { configureStore } from '@reduxjs/toolkit';

import enclouresCase from "../Slices/SelectBildingsSlice"
import filter from "../Slices/FilterSlice";

const store = configureStore({
  reducer: { enclouresCase, filter },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;