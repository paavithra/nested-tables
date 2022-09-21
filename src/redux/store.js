import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appReducer';
import vendorReducer from './vendorReducer';

export default configureStore({
  reducer: { vendor: vendorReducer, app: appReducer },
});
