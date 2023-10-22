import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { employeesClearState, employeesLikeToggle, } from '../EmployeesList/EmployeesSlice';
import { employeesFetch } from '../EmployeesList/EmployeesSlice';

import { Button } from '../UI/Button/Button';
import { EmployeesItem } from '../EmployeesItem/EmployeesItem';
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
  
  useEffect(() => {
    onRequest();
    return () => {
      dispatch(employeesClearState());
    }
  }, [])

  const onRequest = () => {
    dispatch(employeesFetch(offset));
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