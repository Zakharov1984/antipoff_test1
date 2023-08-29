import { useState } from "react";
import { Button } from "../../copmponents/UI/Button/Button";
import { Input } from "../../copmponents/UI/Input/Input";

import classes from './Register.module.scss';

export const Register = () => {

  const [valueInputs, setValueInputs] = useState({
    name: '',
    email: '',
    password: '',
    checkPassword: '',
  })

  const changeValuesInput = (e) => {
    setValueInputs({...valueInputs, [e.target.name]: e.target.value})
  }

  return (
    <div className={classes.register}>
      <form className={classes.registerForm} action="#" >
        <h1 className={classes.registerForm__title}>Регистрация</h1>
        <Input
          classNameInput={classes.registerForm__input} 
          type='text' 
          name="name"
          onChange={changeValuesInput} 
          value={valueInputs.name}
          label='Имя' />
          <Input
            classNameInput={classes.registerForm__input} 
            type='text' 
            name="email"
            onChange={changeValuesInput} 
            value={valueInputs.email}
            label='Электронная почта' />
          <Input
            classNameInput={classes.registerForm__input} 
            type='password' 
            name="password"
            onChange={changeValuesInput} 
            value={valueInputs.password}
            label='Пароль' />
          <Input
            classNameInput={classes.registerForm__input} 
            type='password' 
            name="checkPassword"
            onChange={changeValuesInput} 
            value={valueInputs.checkPassword}
            label='Подтвердите пароль' />
          <Button className={classes.registerForm__button}>
            Зарегистрироваться
          </Button>
      </form>
    </div>
  )
}
