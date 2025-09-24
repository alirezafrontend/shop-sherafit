// import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface GridState {
  gridLg: number;
  gridMd: number;
  grid: number;
}

const initialState: GridState = {
  gridLg: 4,
  gridMd: 2,
  grid: 2,
};

const PageGridSlice = createSlice({
  name: "pageGrid",
  initialState,
  reducers: {
    changerGridLg: (state, action: PayloadAction<number>) => {
      state.gridLg = action.payload;
    },
    changerGridMd: (state, action: PayloadAction<number>) => {
      state.gridMd = action.payload;
    },
    changerGrid: (state, action: PayloadAction<number>) => {
      state.grid = action.payload;
    },
  },
});

export const { changerGridLg , changerGridMd , changerGrid } = PageGridSlice.actions;
export default PageGridSlice.reducer;
