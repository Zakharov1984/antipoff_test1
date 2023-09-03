import { EmployeesList } from "../../copmponents/EmployeesList/EmployeesList";
import { Header } from "../../copmponents/Header/Header"

import classes from './Catalog.module.scss';

export const Catalog = () => {
  return (
    <div className="catalog">
      <Header>
        <h1 className={classes.catalogHeader__title}>Наша команда</h1>
        <div className={classes.catalogHeader__descr}>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций. 
        </div>
      </Header>
      <EmployeesList/>
    </div>
  )
}