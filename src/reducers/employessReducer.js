const initialState = {
  employees: [],
  employeesLoading: true,
  employeesLoadingError: '',
  newEmployeesLoading: false,
  employeesEnded: false,
  offset: 70,
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
        offset: state.offset + 8,
        employeesLoading: false,
        newEmployeesLoading: false,
        employeesEnded: action.payload.length < 8 ? true : false 
      }
    case 'EMPLOYEES_FETCHING_ERROR': 
      return {
        ...state,
        employeesLoading: false,
        newEmployeesLoading: false,
        employeesLoadingError: action.payload,
      }
    case 'EMPLOEES_CLEAR_STATE':
      return {
        employees: [],
        employeesLoading: true,
        employeesLoadingError: '',
        newEmployeesLoading: false,
        employeesEnded: false,
        offset: 70,
      }
    case 'EMPLOEES_LIKE_TOGGLE':
      return {
        ...state,
        employees: state.employees.map(employee => {
          if (employee.id === action.payload) {
            return {
              ...employee,
              like: !employee.like,
            }
          }
          return employee;
        })
      }
    default:
      return state;
  }
}

export default employessReducer;