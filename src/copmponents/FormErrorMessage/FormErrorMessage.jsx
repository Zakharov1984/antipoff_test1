import {errorMessageInForm} from '../../utils/errorMessageInForm';

import classes from './FormErrorMessage.module.scss'

export const FormErrorMessage = ({type}) => {
  return (
    <div className={classes.errorMessage}>
      {errorMessageInForm(type)}
    </div>
  )
}