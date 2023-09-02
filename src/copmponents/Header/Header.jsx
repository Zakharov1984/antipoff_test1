
import { Button } from '../UI/Button/Button';
import classes from './Header.module.scss';

export const Header = ({children}) => {
  return (
    <header className={classes.header}>
      <div className="container">
        <nav className={classes.nav}>
          <Button className={classes.nav__btn}>
            Назад
          </Button>
          <Button className={classes.nav__btn}>
            Выход
          </Button>
        </nav>
        {children}
      </div>
    </header>
  )
}