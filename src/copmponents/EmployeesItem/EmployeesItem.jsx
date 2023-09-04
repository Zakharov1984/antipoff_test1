import {ReactComponent as IconLike} from '../../resources/employees/like.svg';

import classes from './EmployeesItem.module.scss';

export const EmployeesItem = ({img, name, like}) => {
  return (
    <li className={classes.employeesItem}>
      <img className={classes.employeesItem__img} src={img} alt="employee" />
      <div className={classes.employeesItem__name}>{name}</div>
      <button className={classes.employeesItem__wrapperLike}>
        <IconLike className={classes.employeesItem__like}/>
      </button>
    </li>
  )
}