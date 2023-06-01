import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import userdataReducer from "./user/userdataReducer";
import userInfoReducer from "./user/userInfoReducer";
import canteenTokensReducers from "./canteen/canteenTokensReducers";
import canteenInfoReducers from "./canteen/canteenInfoReducers";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  userdata: userdataReducer,
  userInfo: userInfoReducer,
  canteenTokens: canteenTokensReducers,
  canteenInfo: canteenInfoReducers,
});

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
});
export default store;
