import classes from './Input.module.scss';

import cn from 'classnames';

export const Input = ({label, classNameInput, IconVisible, ...props}) => {
  if (label) {
    return <label className={classes.label}>
              {label}
              <div className={classes.inputWithIcon}>
                <input className={cn(classes.input, classNameInput)} {...props} />
                {IconVisible 
                ? IconVisible
                : null}
              </div>
            </label>
  }

  return (
    <div className={classes.inputWithIcon}>
      <input className={cn(classes.input, classNameInput)} {...props} />
      {IconVisible 
      ? IconVisible
      : null}
    </div>
  )
}
