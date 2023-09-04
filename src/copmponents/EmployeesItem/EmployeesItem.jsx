import {ReactComponent as IconLike} from '../../resources/employees/like.svg';

import cn from 'classnames';

import classes from './EmployeesItem.module.scss';

export const EmployeesItem = ({id, img, name, like, onToggleLike}) => {

  const mainClassLike = like 
                          ? cn(classes.employeesItem__like, classes.employeesItem__like_active) 
                          : classes.employeesItem__like;

  const onLike = (e) => {
    e.stopPropagation();
    onToggleLike(id);
  }

  return (
    <li className={classes.employeesItem}>
      <img className={classes.employeesItem__img} src={img} alt="employee" />
      <div className={classes.employeesItem__name}>{name}</div>
      <button 
        className={classes.employeesItem__wrapperLike}
        onClick={onLike}>
        <IconLike className={mainClassLike}/>
      </button>
    </li>
  )
}