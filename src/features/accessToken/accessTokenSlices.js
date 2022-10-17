import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const getAccessToken = createSlice({
  name: "accessToken",
  initialState,
  reducers: {
    saveAccessToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveAccessToken } = getAccessToken.actions;
export default getAccessToken.reducer;
