import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import offerReducer from '../features/offer/offerSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    offer: offerReducer
  },
});
