import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
  validCars: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.validCars = action.payload;
      });
    //   .addCase(addContact.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(addContact.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.error.message;
    //   })
    //   .addCase(addContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items.push(action.payload);
    //   })
    //   .addCase(deleteContact.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(deleteContact.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.error.message;
    //   })
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items = state.items.filter(
    //       (item) => item.id !== action.payload.id
    //     );
    //   })
    //   .addCase(editContact.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     const index = state.items.findIndex(
    //       (item) => item.id === action.payload.id
    //     );
    //     state.items.splice(index, 1, action.payload);
    //   });
  },
});

const { reducer: carsReducer } = carsSlice;
export default carsReducer;
