import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employee: {},
  employeeLoading: false,
  employeeLoadingError: '',
}

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    employeeFetching: state => {state.employeeLoading = true},
    employeeFetched: (state, action) => {
      state.employeeLoading = false;
      state.employee = action.payload;
    },
    employeeFetchingError: (state, action) => {
      state.employeeLoading = false;
      state.employeeLoadingError = action.payload;
    } 

  }
})

const {actions, reducer} = employeeSlice;

export default reducer;

export const {
  employeeFetching,
  employeeFetched,
  employeeFetchingError,
} = actions;
