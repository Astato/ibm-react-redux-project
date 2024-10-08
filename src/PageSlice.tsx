import { createSlice } from "@reduxjs/toolkit";

const PageSlice = createSlice({
  name: "page",
  initialState: {
    page: "",
  },
  reducers: {
    navigate: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { navigate } = PageSlice.actions;
export default PageSlice.reducer;
