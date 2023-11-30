import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.cars;
// export const selectFilter = (state) => state.filter;
// export const selectError = (state) => state.contacts.error;
export const selectIsLoading = (state) => state.isLoading;

console.log(selectCars);
// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
