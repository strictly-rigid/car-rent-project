import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "./carsSlice";

axios.defaults.baseURL = "https://64e8d9f999cf45b15fe03b41.mockapi.io";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, thunkAPI) => {
    try {
      // const { currentPage, perPage } = initialState;
      const response = await axios.get(`/advert`);
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
