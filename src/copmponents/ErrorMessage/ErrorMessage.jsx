import classes from './ErrorMessage.module.scss';

export const ErrorMessage = ({message}) => {
  return (
    <div className={classes.errorMessage}>
      {message}
    </div>
  )
} 