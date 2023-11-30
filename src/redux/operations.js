import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64e8d9f999cf45b15fe03b41.mockapi.io";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/advert");
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async (contact, thunkAPI) => {
//     try {
//       const response = await axios.post("/advert", contact);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/advert/${contactId}`);
//       return response.data;
//     } catch (error) {
//       console.error(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const editContact = createAsyncThunk(
//   "contacts/editContact",
//   async (body, thunkAPI) => {
//     try {
//       const response = await axios.put(`/advert/${body.id}`, body);
//       console.log("response", response);
//       return response.data;
//     } catch (error) {
//       console.error(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
