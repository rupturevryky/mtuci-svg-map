import { configureStore } from '@reduxjs/toolkit';

import enclouresCase from "../Slice/SelectBildingsSlice"

const store = configureStore({
  reducer: enclouresCase,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;