import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDummyService } from "../../services/dummyService";

const initialState = {
  employees: [],
  employeesLoading: true,
  employeesLoadingError: '',
  newEmployeesLoading: false,
  employeesEnded: false,
  offset: 70,
}

export const employeesFetch = createAsyncThunk(
  'employees/employeesFetch',
  async (offset) => {
    const { getEmployees } = useDummyService();
    return await getEmployees(offset);
  }
)



const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(employeesFetch.pending, state => {state.newEmployeesLoading = true})
      .addCase(employeesFetch.fulfilled, (state, action) => {
        state.employees = [...state.employees, ...action.payload];
        state.offset = state.offset + 8;
        state.employeesLoading = false;
        state.newEmployeesLoading = false;
        state.employeesEnded = action.payload.length < 8 ? true : false;
      })
      .addCase(employeesFetch.rejected, (state,action) => {
        state.employeesLoading = false;
        state.newEmployeesLoading = false;
        state.employeesLoadingError = action.payload;
      })
      .addDefaultCase(() => {}) 
  }

})

const {actions, reducer} = employeesSlice;

export default reducer;

export const { 
  employeesClearState,
  employeesLikeToggle,
} = actions;