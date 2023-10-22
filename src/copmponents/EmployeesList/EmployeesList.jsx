import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { employeesFetching, employeesFetched, employeesFetchingError, employeesClearState, employeesLikeToggle, } from '../EmployeesList/EmployeesSlice';

import { Button } from '../UI/Button/Button';
import { EmployeesItem } from '../EmployeesItem/EmployeesItem';
import { useDummyService } from '../../services/dummyService';
import { Spinner } from '../Spinner/Spinner';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import {ReactComponent as IconArrowDown} from '../../resources/employees/arrowDown.svg';

import classes from './EmployeesList.module.scss';



export const EmployeesList = () => {
  const dispatch = useDispatch();
  const {employees,
        offset,
        employeesLoading,
        newEmployeesLoading,
        employeesLoadingError,
        employeesEnded} = useSelector(state => state.employees);


  const {getEmployees} = useDummyService();
  
  useEffect(() => {
    onRequest();
    return () => {
      dispatch(employeesClearState());
    }
  }, [])

  const onRequest = () => {
    dispatch(employeesFetching());
    getEmployees(offset)
      .then(resEmployees => dispatch(employeesFetched(resEmployees)))
      .catch(error => dispatch(employeesFetchingError(error)));
    console.log('onRequest');
  }


  const onToggleLike = (id) => {
    dispatch(employeesLikeToggle(id));
  }

  return (
    <section className={classes.employees}>
      <div className="container">
        {employeesLoading && <Spinner/>}
        {employeesLoadingError && <ErrorMessage message={employeesLoadingError}/>}
        {(employeesLoading || employeesLoadingError) 
        ? null
        : <>
            <ul className={classes.employeesList}>
              {employees.map(employee => <EmployeesItem key={employee.id} {...employee} onToggleLike={onToggleLike}/>)}
            </ul>
            <Button
              style={{display: employeesEnded ? 'none' : 'flex'}}
              disabled={newEmployeesLoading}
              className={classes.employees__more}
              onClick={() => onRequest(offset)}>
              {!newEmployeesLoading 
              ? <>
                  Показать еще
                  <IconArrowDown/>
                </> 
              : 'Загрузка...'}
            </Button>
          </> }
      </div>
    </section>
  )
}