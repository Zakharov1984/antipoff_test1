import { useEffect, useState } from 'react';
import { Button } from '../UI/Button/Button';

import {ReactComponent as BackIcon} from '../../resources/header/back.svg';
import {ReactComponent as ExitIcon} from '../../resources/header/exit.svg';


import classes from './Header.module.scss';

export const Header = ({children}) => {
  const [width, setWidth] = useState(window.innerWidth);

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
          <Button className={classes.nav__btn}>
            {width <= 425 ? <BackIcon/> : 'Назад'}
          </Button>
          <Button className={classes.nav__btn}>
            {width <= 425 ? <ExitIcon/> : 'Выход'}
          </Button>
        </nav>
        {children}
      </div>
    </header>
  )
}