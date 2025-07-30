import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserProfile } from "./UserSlice";
// Thunk asynchrone pour modifier le username
export const updateUserName = createAsyncThunk(
  "users/updateUserName",
  async ({ userId, userName }, thunkAPI) => {
    const token = sessionStorage.getItem("token");
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify({ userName }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Erreur serveur");
    }
    await thunkAPI.dispatch(fetchUserProfile());
    return { userId, userName: data.body.userName || userName };
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    byId: {},
    allIds: [],
    currentUserId: null,
    updateStatus: "idle",
    updateError: null,
  },
  reducers: {
    setCurrentUserId: (state, action) => {
      state.currentUserId = action.payload;
    },
    setUser: (state, action) => {
      const user = action.payload;
      state.byId[user.id] = user;
      if (!state.allIds.includes(user.id)) state.allIds.push(user.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserName.pending, (state) => {
        state.updateStatus = "loading";
        state.updateError = null;
      })
      .addCase(updateUserName.fulfilled, (state) => {
        state.updateStatus = "succeeded";
      })
      .addCase(updateUserName.rejected, (state, action) => {
        state.updateStatus = "failed";
        state.updateError = action.error.message;
      });
  },
});

export const { setCurrentUserId, setUser } = usersSlice.actions;
export default usersSlice.reducer;
