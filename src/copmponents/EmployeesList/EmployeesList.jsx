import { useEffect, useState } from 'react';

import { Button } from '../UI/Button/Button';
import { EmployeesItem } from '../EmployeesItem/EmployeesItem';
import { DummyService } from '../../services/dummyService';
import { Spinner } from '../Spinner/Spinner';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

import {ReactComponent as IconArrowDown} from '../../resources/employees/arrowDown.svg';

import classes from './EmployeesList.module.scss';


export const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [error, setError] = useState('');

  const [offset, setOffset] = useState(70);

  const dummyService = new DummyService();

  useEffect(() => {
    onRequest();
  }, [])

  const onRequest = (offset) => {
    setNewItemsLoading(true);
    dummyService.getEmployees(offset)
      .then(resEmployees => onEmloyeesLoaded(resEmployees))
      .catch(error => onError(error));
    setOffset((offset) => offset + 8);
  }

  const onEmloyeesLoaded = (resEmloyees) => {
    setEmployees([...employees, ...resEmloyees]);
    setLoading(false);
    setNewItemsLoading(false);
  }

  const onError = (error) => {
    setError(error.message);
    setLoading(false);
  }

  const onToggleLike = (id) => {
    const newArray =  employees.map(employee => {
      if (employee.id === id) {
        return {
          ...employee,
          like: !employee.like,
        }
      }
      return employee;
    })
    setEmployees(newArray);
  }

  return (
    <section className={classes.employees}>
      <div className="container">
        {loading && <Spinner/>}
        {error && <ErrorMessage message={error}/>}
        {(loading || error) 
        ? null
        : <>
            <ul className={classes.employeesList}>
              {employees.map(employee => <EmployeesItem key={employee.id} {...employee} onToggleLike={onToggleLike}/>)}
            </ul>
            <Button
              disabled={newItemsLoading}
              className={classes.employees__more}
              onClick={() => onRequest()}>
              {!newItemsLoading 
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