import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
  employeesLoading: true,
  employeesLoadingError: '',
  newEmployeesLoading: false,
  employeesEnded: false,
  offset: 70,
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    employeesFetching: state => {state.newEmployeesLoading = true},
    employeesFetched: (state, action) => {
      state.employees = [...state.employees, ...action.payload];
      state.offset = state.offset + 8;
      state.employeesLoading = false;
      state.newEmployeesLoading = false;
      state.employeesEnded = action.payload.length < 8 ? true : false;
    },
    employeesFetchingError: (state,action) => {
      state.employeesLoading = false;
      state.newEmployeesLoading = false;
      state.employeesLoadingError = action.payload;
    },
    employeesClearState: state => {
      state.employees = [];
      state.employeesLoading = true;
      state.employeesLoadingError = '';
      state.newEmployeesLoading = false;
      state.employeesEnded = false;
      state.offset = 70;
    },
    employeesLikeToggle: (state, action) => {
      state.employees.forEach(el => {
        if (el.id === action.payload) {
          el.like = !el.like;
        }
      })
    }
  }

})

const {actions, reducer} = employeesSlice;

export default reducer;

export const { 
  employeesFetching,
  employeesFetched,
  employeesFetchingError,
  employeesClearState,
  employeesLikeToggle,
} = actions;