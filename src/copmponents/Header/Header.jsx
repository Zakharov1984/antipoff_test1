import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button } from '../UI/Button/Button';
import { logOut } from '../../pages/Register/authSlice';

import {ReactComponent as BackIcon} from '../../resources/header/back.svg';
import {ReactComponent as ExitIcon} from '../../resources/header/exit.svg';

import cn from 'classnames';

import classes from './Header.module.scss';

export const Header = ({children, page}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = (e) => {
      setWidth(e.target.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const onLogOut = () => {
    dispatch(logOut());
    localStorage.removeItem('auth');
  }

  return (
    <header className={classes.header}>
      <div className="container">
        <nav className={classes.nav}>
          <Button
            disabled={page === 'catalog' ? true : false} 
            className={page === 'catalog' ? cn(classes.nav__btn, classes.nav__btn_hidden) : classes.nav__btn}
            onClick={() => navigate('/catalog')}>
            {width <= 425 ? <BackIcon className={classes.svg}/> : 'Назад'}
          </Button>
          <Button 
            className={classes.nav__btn}
            onClick={onLogOut}>
            {width <= 425 ? <ExitIcon/> : 'Выход'}
          </Button>
        </nav>
        {children}
      </div>
    </header>
  )
}