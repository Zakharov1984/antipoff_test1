const initialState = {
  employees: [],
  employeesLoading: true,
  employeesLoadingError: '',
  newEmployeesLoading: false,
  employeesEnded: false
}

const employessReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EMPLOYEES_FETCHING':
      return {
        ...state,
        newEmployeesLoading: true,
      }
    case 'EMPLOYEES_FETCHED': 
      return {
        ...state,
        employees: [...state.employees, ...action.payload],
        employeesLoading: false
      }
    case 'EMPLOYEES_FETCHING_ERROR': 
      return {
        ...state,
        employeesLoading: false,
        employeesLoadingError: action.payload,
      }
    default:
      return state;
  }
}

export default employessReducer;