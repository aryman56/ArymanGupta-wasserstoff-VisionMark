// removeBackgroundSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bgRemoved: false,
  processedImages: null,
};

const removeBackgroundSlice = createSlice({
  name: 'removeBackground',
  initialState,
  reducers: {
    setActionStatus(state, action) {
      state.bgRemoved = action.payload;
    },
    setProcessedImages(state, action) {
      state.processedImages = action.payload;
    },
  },
});

export const { setActionStatus, setProcessedImages } = removeBackgroundSlice.actions;

export default removeBackgroundSlice.reducer;
