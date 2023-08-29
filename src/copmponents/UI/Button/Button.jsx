import cn from 'classnames';

import classes from './Button.module.scss'

export const Button = ({children, className, ...props}) => {
  return (
    <button 
      className={cn(classes.button, className)} 
      {...props}>
      {children}
    </button>
  )
}
