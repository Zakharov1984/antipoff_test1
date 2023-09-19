import { Header } from "../../copmponents/Header/Header";
import { changePhone } from "../../utils/changePhone";

import {ReactComponent as PhoneIcon} from '../../resources/employee/phoneIcon.svg';
import {ReactComponent as MailIcon} from '../../resources/employee/mailIcon.svg';

import classes from './Employee.module.scss';
import { useDummyService } from "../../services/dummyService";
import { useEffect, useState } from "react";

export const Employee = () => {
  const [employee, setEmployee] = useState({});
  const {loading, error, getEmployee} = useDummyService();

  useEffect(() => {
    getEmployee(74)
      .then(employee => setEmployee(employee));
  }, [])

  return (
    <div className={classes.employee}>
      <Header page='employee'>
        <div className={classes.employeeHeader__content}>
          <img src={employee.img}
            className={classes.employeeHeader__img} />
          <div className={classes.employeeHeader__text}>
            <div className={classes.employeeHeader__textName}>{employee.name}</div>
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
              href={`tel:${changePhone(employee.phone)}`}>
                <PhoneIcon/>
                {employee.phone}
            </a>
            <a 
              className={classes.employee__connectItem} href="mailto:mail@htmlacademy.ru">
                <MailIcon/>
                {employee.email}
            </a>
          </div>
        </section>
      </div>
    </div>
  )

}