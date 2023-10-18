export const logInCreateAction = () => {
  return {
    type: 'LOG_IN',
  }
}

export const logOutCreateAction = () => {
  return {
    type: 'LOG_OUT',
  }
}

export const employeesFetchingCreateAction = () => {
  return {
    type: 'EMPLOYEES_FETCHING',
  }
}

export const employeesFetchedCreateAction = (employees) => {
  return {
    type: 'EMPLOYEES_FETCHED',
    payload: employees,
  }
}

export const employeesFetchingErrorCreateAction = (error) => {
  return {
    type: 'EMPLOYEES_FETCHING_ERROR',
    payload: error,
  }
}

export const employeesClearStateCreateAction = () => {
  return {
    type: 'EMPLOEES_CLEAR_STATE',
  }
}

export const employeesLikeToggleCreateAction = (id) => {
  return {
    type: 'EMPLOEES_LIKE_TOGGLE',
    payload: id,
  }
}

export const employeeFetchingCreateAction = () => {
  return {
    type: 'EMPLOYEE_FETCHING',
  }
}

export const employeeFetchedCreateAction = (employees) => {
  return {
    type: 'EMPLOYEE_FETCHED',
    payload: employees,
  }
}

export const employeeFetchingErrorCreateAction = (error) => {
  return {
    type: 'EMPLOYEE_FETCHING_ERROR',
    payload: error,
  }
}