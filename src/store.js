
import { configureStore } from '@reduxjs/toolkit';
import authReducer  from './slices/UserSlice';
import usersReducer from './slices/UpdateUsernameSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
});

export default store;
