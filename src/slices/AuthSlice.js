import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//thunk login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData.message || 'Erreur de connexion');
      }
      const data = await response.json();
      // Récupère le token à l'intérieur de body
      const token = data.body.token;
      sessionStorage.setItem('token', token);
      return { token }; // On retourne un objet avec la clé token
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


//thunk recuperatio profil utilisateur
export const fetchUserProfile = createAsyncThunk(
  'auth/fetchUserProfile',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log('Réponse API login:', data);
        return thunkAPI.rejectWithValue(errorData.message);
      }
      const data = await response.json();
      return data; // { status, message, body: { id, email } }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  token: sessionStorage.getItem('token') || null,
  user: null,
  loading: false,
  error: null,
  isAuthenticated: !!sessionStorage.getItem('token'),
  profileLoading: false,
  profileError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      state.profileError = null;
      sessionStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Erreur de connexion';
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.profileLoading = true;
        state.profileError = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.profileLoading = false;
        state.user = action.payload.body;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.profileLoading = false;
        state.profileError = action.payload || 'Erreur de récupération du profil';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
