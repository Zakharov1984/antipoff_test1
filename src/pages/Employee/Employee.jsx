import { Header } from "../../copmponents/Header/Header";
import classes from './Employee.module.scss';

export const Employee = () => {

  return (
    <Header page='employee'>
      <div className={classes.employeeHeader__content}>
        <img src="https://img.freepik.com/free-photo/portrait-of-handsome-smiling-stylish-hipster-lambersexual-model-sexy-man-dressed-in-pink-tshirt-and-trousers-fashion-male-isolated-on-blue-wall-in-studio_158538-26677.jpg?w=1060&t=st=1695028803~exp=1695029403~hmac=b289ce6d460530aa4165ffdc3fa79d5e0e6709f9ef40fc2339b57f9cebcdeadf" 
          alt="employee"
          className={classes.employeeHeader__img} />
        <div className={classes.employeeHeader__text}>
          <div className={classes.employeeHeader__textName}>Артур Королев</div>
          <div className={classes.employeeHeader__textStatus}>Партнер</div>
        </div>
      </div>
    </Header>
  )

}