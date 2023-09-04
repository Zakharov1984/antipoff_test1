import { Button } from '../UI/Button/Button';
import {ReactComponent as IconLike} from '../../resources/employees/arrowDown.svg';
import {ReactComponent as IconArrowDown} from '../../resources/employees/arrowDown.svg';

import classes from './EmployeesList.module.scss';

export const EmployeesList = () => {
  return (
    <section className={classes.employees}>
      <div className="container">
        <ul className={classes.employeesList}>
        
        </ul>
        <Button className={classes.employees__more}>
          Показать еще
          <IconArrowDown/>
        </Button>
      </div>
    </section>
  )
}