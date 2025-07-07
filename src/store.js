
import { configureStore } from '@reduxjs/toolkit';
import authReducer  from './slices/AuthSlice';
import usersReducer from './slices/UpdateUsername';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
});

export default store;
