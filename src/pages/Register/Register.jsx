import { useState } from "react";

import { Button } from "../../copmponents/UI/Button/Button";
import { Input } from "../../copmponents/UI/Input/Input";

import cn from 'classnames';

import {ReactComponent as IconEye} from '../../resources/visible.svg'

import classes from './Register.module.scss';

export const Register = () => {

  const [valueInputs, setValueInputs] = useState({
    name: '',
    email: '',
    password: '',
    checkPassword: '',
  })
  const [isVisiblePassword, setisVisiblePassword] = useState(false);
  const [isVisibleCheckPassword, setIsVisibleCheckPassword] = useState(false);

  const changeValuesInput = e => {
    setValueInputs({...valueInputs, [e.target.name]: e.target.value})
  }

  const changeVisiblePassword = () => setisVisiblePassword(!isVisiblePassword);
  const changeIsVisibleCheckPassword = () => setIsVisibleCheckPassword(!isVisibleCheckPassword);

  let mainClassIconPassword = !isVisiblePassword 
                                ? classes.registerForm__icon 
                                : cn(classes.registerForm__icon, classes.notActive);

  let mainClassIconCheckPassword = !isVisibleCheckPassword 
                                    ? classes.registerForm__icon 
                                    : cn(classes.registerForm__icon, classes.notActive);

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
            type={isVisiblePassword ? 'text' : 'password'} 
            name="password"
            onChange={changeValuesInput} 
            value={valueInputs.password}
            label='Пароль'
            IconEye={<IconEye 
                      className={mainClassIconPassword} 
                      onClick={changeVisiblePassword}/>}/>
          <Input
            classNameInput={classes.registerForm__input} 
            type={isVisibleCheckPassword ? 'text' : 'password'} 
            name="checkPassword"
            onChange={changeValuesInput} 
            value={valueInputs.checkPassword}
            label='Подтвердите пароль'
            IconEye={<IconEye 
                      className={mainClassIconCheckPassword} 
                      onClick={changeIsVisibleCheckPassword}/>}/>
          <Button className={classes.registerForm__button}>
            Зарегистрироваться
          </Button>
      </form>
    </div>
  )
}
