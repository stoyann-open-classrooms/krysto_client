import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import offerReducer from '../features/offer/offerSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    offer: offerReducer,
    user: userReducer,
  },
});
