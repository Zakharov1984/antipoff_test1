import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { Button } from '../UI/Button/Button';

import {ReactComponent as BackIcon} from '../../resources/header/back.svg';
import {ReactComponent as ExitIcon} from '../../resources/header/exit.svg';

import cn from 'classnames';

import classes from './Header.module.scss';

export const Header = ({children, page}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = (e) => {
      setWidth(e.target.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

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
            onClick={() => navigate('/register ')}>
            {width <= 425 ? <ExitIcon/> : 'Выход'}
          </Button>
        </nav>
        {children}
      </div>
    </header>
  )
}