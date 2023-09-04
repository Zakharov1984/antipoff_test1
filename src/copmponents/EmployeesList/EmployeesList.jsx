import { useEffect, useState } from 'react';

import { Button } from '../UI/Button/Button';
import { EmployeesItem } from '../EmployeesItem/EmployeesItem';
import { DummyService } from '../../services/dummyService';

import {ReactComponent as IconArrowDown} from '../../resources/employees/arrowDown.svg';

import classes from './EmployeesList.module.scss';


export const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  const dummyService = new DummyService();

  useEffect(() => {
    dummyService.getEmployees()
      .then(resEmployees => setEmployees([...employees, ...resEmployees]));
  }, [])

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
        <ul className={classes.employeesList}>
          {employees.map(employee => <EmployeesItem key={employee.id} {...employee} onToggleLike={onToggleLike}/>)}
        </ul>
        <Button className={classes.employees__more}>
          Показать еще
          <IconArrowDown/>
        </Button>
      </div>
    </section>
  )
}