import {ReactComponent as IconLike} from '../../resources/employees/like.svg';

import classes from './EmployeesItem.module.scss';

export const EmployeesItem = () => {
  return (
    <li className={classes.employeesItem}>
      <img className={classes.employeesItem__img} src="" alt="" />
      <div className={classes.employeesItem__name}>Артур Королёв</div>
      <button className={classes.employeesItem__wrapperLike}>
        <IconLike className={classes.employeesItem__like}/>
      </button>
    </li>
  )
}