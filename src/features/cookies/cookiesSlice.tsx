import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const cookieSlice = createSlice({
  name: "cookie",
  initialState,
  reducers: {
    parseCookie: (state, action) => {
      action.payload
        .split(";")
        .map((v: string) => v.split("="))
        .reduce((acc: string, v: string) => {
          acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(
            v[1].trim()
          );
          state.value = acc;
          return true;
        }, {});
    },
  },
});

export const { parseCookie } = cookieSlice.actions;
export default cookieSlice.reducer;
