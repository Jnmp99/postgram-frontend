import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ""
};

const contentContainerWidthSlice = createSlice({
  name: "requestedUser",
  initialState,
  reducers: {
    saveContentContainerWidth: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { saveContentContainerWidth } = contentContainerWidthSlice.actions;
export default contentContainerWidthSlice.reducer;
