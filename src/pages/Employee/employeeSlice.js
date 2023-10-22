import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDummyService } from "../../services/dummyService";

const initialState = {
  employee: {},
  employeeLoading: false,
  employeeLoadingError: '',
}

export const employeeFetch = createAsyncThunk(
  'employee/employeeFetch',
  async (id) => {
    const { getEmployee } = useDummyService();
    return await getEmployee(id);
  }
)

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(employeeFetch.pending, state => {state.employeeLoading = true})
      .addCase(employeeFetch.fulfilled, (state, action) => {
        state.employeeLoading = false;
        state.employee = action.payload;
      })
      .addCase(employeeFetch.rejected, (state, action) => {
        state.employeeLoading = false;
        state.employeeLoadingError = action.payload;
      })
      .addDefaultCase(() => {}) 
  }
})

const {actions, reducer} = employeeSlice;

export default reducer;

export const {
  employeeFetching,
  employeeFetched,
  employeeFetchingError,
} = actions;

