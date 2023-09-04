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
  
  dummyService.getEmployees();

  return (
    <section className={classes.employees}>
      <div className="container">
        <ul className={classes.employeesList}>
          {employees.map(employee => <EmployeesItem key={employee.id} {...employee}/>)}
        </ul>
        <Button className={classes.employees__more}>
          Показать еще
          <IconArrowDown/>
        </Button>
      </div>
    </section>
  )
}