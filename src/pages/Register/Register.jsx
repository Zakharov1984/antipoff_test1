import { Input } from "../../copmponents/UI/Input/Input";

import classes from './Register.module.scss';
console.log(classes);

export const Register = () => {
  return (
    <div className={classes.register}>
      <form className={classes.registerForm} action="#" >
        <Input
          classNameInput={classes.registerForm__input} 
          type='text' 
          name="name" 
          value='check'
          label='Имя' />
      </form>
    </div>
  )
}
