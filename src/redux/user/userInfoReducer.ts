import { createSlice } from "@reduxjs/toolkit";

interface UserData {
  userId: string | null;
  name: string | null;
  email: string | null;
}

const initialState: UserData = {
  userId: null,
  name: null,
  email: null,
};

const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addUserInfo: (state, action) => {
      return action.payload;
    },
    logout: () => {
      return undefined;
    },
  },
});

export const { addUserInfo, logout } = userInfo.actions;
export default userInfo.reducer;
