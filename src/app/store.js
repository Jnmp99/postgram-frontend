import { configureStore } from "@reduxjs/toolkit";
import cookiesReducer from "../features/cookies/cookiesSlice";
import accessTokenReducer from "../features/accessToken/accessTokenSlices";

export const store = configureStore({
  reducer: {
    cookie: cookiesReducer,
    accessToken: accessTokenReducer,
  },
});
