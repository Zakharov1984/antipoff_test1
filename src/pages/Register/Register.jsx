import { Button } from "../../copmponents/UI/Button/Button";
import { Input } from "../../copmponents/UI/Input/Input";

import classes from './Register.module.scss';
console.log(classes);

export const Register = () => {
  return (
    <div className={classes.register}>
      <form className={classes.registerForm} action="#" >
        <h1 className={classes.registerForm__title}>Регистрация</h1>
        <Input
          classNameInput={classes.registerForm__input} 
          type='text' 
          name="name" 
          value='check'
          label='Имя' />
          <Input
            classNameInput={classes.registerForm__input} 
            type='text' 
            name="name" 
            value='check'
            label='Электронная почта' />
          <Input
            classNameInput={classes.registerForm__input} 
            type='password' 
            name="name" 
            value='check'
            label='Пароль' />
          <Input
            classNameInput={classes.registerForm__input} 
            type='password' 
            name="name" 
            value='check'
            label='Подтвердите пароль' />
          <Button className={classes.registerForm__button}>
            Зарегистрироваться
          </Button>
      </form>
    </div>
  )
}
