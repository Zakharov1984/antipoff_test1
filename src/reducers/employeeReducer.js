const initialState = {
  employee: {},
  employeeLoading: false,
  employeeLoadingError: '',
}

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EMPLOYEE_FETCHING':
      return {
        ...state,
        employeeLoading: true,
      }
    case 'EMPLOYEE_FETCHED': 
      return {
        ...state,
        employee: action.payload,
        employeeLoading: false,
      }
    case 'EMPLOYEE_FETCHING_ERROR': 
      return {
        ...state,
        employeeLoading: false,
        employeeLoadingError: action.payload,
      }
    default:
      return state;
  }
}

export default employeeReducer;