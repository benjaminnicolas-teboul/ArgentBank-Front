import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../slices/UserSlice';

const AuthLoader = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, profileLoaded, profileLoading } = useSelector(state => state.auth);

  useEffect(() => {
    if (isAuthenticated && !profileLoaded && !profileLoading) {
      dispatch(fetchUserProfile());
    }
  }, [isAuthenticated, profileLoaded, profileLoading, dispatch]);

  return null; 
};

export default AuthLoader;
