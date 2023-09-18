import { Header } from "../../copmponents/Header/Header";

import {ReactComponent as PhoneIcon} from '../../resources/employee/phoneIcon.svg';
import {ReactComponent as MailIcon} from '../../resources/employee/mailIcon.svg';

import classes from './Employee.module.scss';

export const Employee = () => {

  return (
    <div className={classes.employee}>
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
      <div className="container">
        <section className={classes.employee__content}>
          <div className={classes.employee__desc}>
            <p>
              Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.
            </p>
            <p>
              В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности, уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше развиваться самостоятельно".
            </p>
            <p>
              Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других бизнес-проектов.
            </p>        
          </div>
          <div className={classes.employee__connect}>
            <a 
              className={classes.employee__connectItem} 
              href="tel:+79001111111">
                <PhoneIcon/>
                +7-900-111-11-11
            </a>
            <a 
              className={classes.employee__connectItem} href="mailto:mail@htmlacademy.ru">
                <MailIcon/>
                Напишите нам
            </a>
          </div>
        </section>
      </div>
    </div>
  )

}