import { useEffect, useState } from "react";

import { Button } from "../../copmponents/UI/Button/Button";
import { Input } from "../../copmponents/UI/Input/Input";
import { FormErrorMessage } from "../../copmponents/FormErrorMessage/FormErrorMessage";
import {ReactComponent as IconEye} from '../../resources/visible.svg';

import cn from 'classnames';

import classes from './Register.module.scss';

export const Register = () => {
  //состояния
  const [inputsValue, setInputsValue] = useState({
    name: '',
    email: '',
    password: '',
    checkPassword: '',
  })

  const [inputsDirty, setInputsDirty] = useState({
    name: false,
    email: false,
    password: false,
    checkPassword: false,
  })

  const [inputsError, setInputsError] = useState({
    name: true,
    email: true,
    password: true,
    checkPassword: true,
  })

  const [formValid, setFormValid] = useState(false);

  const [isVisiblePassword, setisVisiblePassword] = useState(false);
  const [isVisibleCheckPassword, setIsVisibleCheckPassword] = useState(false);
  //____________________________________________________________________________

  useEffect(() => {
    const {name, email, password, checkPassword} = inputsError;
    (name || email || password || checkPassword) ? setFormValid(false) : setFormValid(true);
  }, [inputsError]);

  const changeValuesInput = e => {
    setInputsValue({...inputsValue, [e.target.name]: e.target.value})
  }

  const blurHandler = (e) => {
    setInputsDirty({...inputsDirty, [e.target.name]: true})
  }

  const changeError = (e, isError) => {
    setInputsError({...inputsError, [e.target.name] : isError})
  }

  const handlerInputs = (e) => {
    changeValuesInput(e);
    switch (e.target.name) {
      case 'name':
        e.target.value.length < 3 ? changeError(e, true) : changeError(e, false);
        break;
      case 'email':
        const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        re.test(String(e.target.value).toLowerCase()) ? changeError(e, false) : changeError(e, true);
        break;
      case 'password':
        e.target.value.length < 5 ? changeError(e, true) : changeError(e, false);
        break;
        case 'checkPassword':
          e.target.value !== inputsValue.password ? changeError(e, true) : changeError(e, false);
          break;
      default:
        console.log('sdf');
    }
  }

  const changeVisiblePassword = () => setisVisiblePassword(!isVisiblePassword);
  const changeIsVisibleCheckPassword = () => setIsVisibleCheckPassword(!isVisibleCheckPassword);

  let mainClassIconPassword = !isVisiblePassword 
                                ? classes.registerForm__icon 
                                : cn(classes.registerForm__icon, classes.notActive);

  let mainClassIconCheckPassword = !isVisibleCheckPassword 
                                    ? classes.registerForm__icon 
                                    : cn(classes.registerForm__icon, classes.notActive);

  let mainClassButton = formValid 
                          ? cn(classes.registerForm__button, classes.notDisabled)
                          : classes.registerForm__button
    
  return (
    <div className={classes.register}>
      <form className={classes.registerForm} action="#" >
        <h1 className={classes.registerForm__title}>Регистрация</h1>
        <Input
          classNameInput={classes.registerForm__input} 
          type='text' 
          name="name"
          onChange={handlerInputs}
          onBlur={blurHandler}
          value={inputsValue.name}
          label='Имя' />
          {(inputsDirty.name && inputsError.name) && <FormErrorMessage type='name'/>}
          <Input
            classNameInput={classes.registerForm__input} 
            type='text' 
            name="email"
            onChange={handlerInputs}
            onBlur={blurHandler} 
            value={inputsValue.email}
            label='Электронная почта' />
          {(inputsDirty.email && inputsError.email) && <FormErrorMessage type='email'/>}
          <Input
            classNameInput={classes.registerForm__input} 
            type={isVisiblePassword ? 'text' : 'password'} 
            name="password"
            onChange={handlerInputs}
            onBlur={blurHandler} 
            value={inputsValue.password}
            label='Пароль'
            IconEye={<IconEye 
                      className={mainClassIconPassword} 
                      onClick={changeVisiblePassword}/>}/>
            {(inputsDirty.password && inputsError.password) && <FormErrorMessage type='password'/>}
          <Input
            classNameInput={classes.registerForm__input} 
            type={isVisibleCheckPassword ? 'text' : 'password'} 
            name="checkPassword"
            onChange={handlerInputs}
            onBlur={blurHandler} 
            value={inputsValue.checkPassword}
            label='Подтвердите пароль'
            IconEye={<IconEye 
                      className={mainClassIconCheckPassword} 
                      onClick={changeIsVisibleCheckPassword}/>}/>
            {(inputsDirty.checkPassword && inputsError.checkPassword) && <FormErrorMessage type='checkPassword'/>}
          <Button 
            disabled={!formValid} 
            className={mainClassButton}
            onClick={() => console.log('buttonActive')}>
            Зарегистрироваться
          </Button>
      </form>
    </div>
  )
}
