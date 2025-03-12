import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
interface checkState {
  checked: number;
}

// Define the initial state for the header
const initialState: checkState = {
  checked: 0
};

// Create the slice with the key slideChecked
const checkSlice = createSlice({
  name: "slideChecked",
  initialState,
  reducers: {
    setChecked: (state, action: PayloadAction<number>) => {
      state.checked = action.payload;
    }
  }
});

// Export actions and reducer
export const { setChecked } = checkSlice.actions;
export default checkSlice.reducer;
