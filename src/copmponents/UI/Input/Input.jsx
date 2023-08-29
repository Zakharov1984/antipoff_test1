import classes from './Input.module.scss';

import cn from 'classnames';

export const Input = ({label, classNameInput, ...props}) => {
  if (label) {
    return <label className={classes.label}>
              {label}
              <input className={cn(classes.input, classNameInput)} {...props} />
            </label>
  }

  return (
    <input className={cn(classes.input, classNameInput)} {...props} />
  )
}
