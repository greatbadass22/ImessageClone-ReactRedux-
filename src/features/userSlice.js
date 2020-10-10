import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: 'shawn',
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { logout, login } = userSlice.actions;

export const selectUser = (state) => state.user.selectUser;

export default userSlice.reducer;
