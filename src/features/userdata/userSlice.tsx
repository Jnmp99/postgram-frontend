import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ""
};

export const saveLocalUserData = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { saveUserData } = saveLocalUserData.actions;
export default saveLocalUserData.reducer;
