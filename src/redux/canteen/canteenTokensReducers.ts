import { createSlice } from "@reduxjs/toolkit";

interface Token {
  canteenAccessToken: string | null;
  canteenRefreshToken: string | null;
}

const initialState: Token = {
  canteenAccessToken: null,
  canteenRefreshToken: null,
};

const canteenTokens = createSlice({
  name: "canteenTokens",
  initialState,
  reducers: {
    addCanteenTokens: (state, action) => {
      return action.payload;
    },
    canteenLogout: () => {
      return undefined;
    },
  },
});

export const { addCanteenTokens, canteenLogout } = canteenTokens.actions;
export default canteenTokens.reducer;
