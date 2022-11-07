import { configureStore } from "@reduxjs/toolkit";
import cookiesReducer from "../features/cookies/cookiesSlice";
import accessTokenReducer from "../features/accessToken/accessTokenSlices";
import userDataReducer from "../features/userdata/userSlice";
import contentContainerWidthReducer from "../features/contentContainerWidth/ContentContainerWidthSlice";

export const store = configureStore({
  reducer: {
    cookie: cookiesReducer,
    accessToken: accessTokenReducer,
    userData: userDataReducer,
    contentContainerWidth: contentContainerWidthReducer
  }
});
