import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../../copmponents/Header/Header";
import { Spinner } from "../../copmponents/Spinner/Spinner";
import { ErrorMessage } from "../../copmponents/ErrorMessage/ErrorMessage";
import { changePhone } from "../../utils/changePhone";
import { employeeFetch } from '../Employee/employeeSlice';

import {ReactComponent as PhoneIcon} from '../../resources/employee/phoneIcon.svg';
import {ReactComponent as MailIcon} from '../../resources/employee/mailIcon.svg';

import classes from './Employee.module.scss';


export const Employee = () => {

  const {id} = useParams();

  const dispatch = useDispatch();
  const {employee, employeeLoading, employeeLoadingError} = useSelector(state => state.employee);

  useEffect(() => {
    dispatch(employeeFetch(id));
  }, [])

  return (
    <div className={classes.employee}>
      {employeeLoading && <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Spinner/></div>}
      {employeeLoadingError && <ErrorMessage message={employeeLoadingError}/>}
      {(employeeLoading || employeeLoadingError) 
        ? null
        : <>
            <Header page='employee'>
              <div className={classes.employeeHeader__content}>
                <img 
                  src={employee.img}
                  className={classes.employeeHeader__img} 
                  alt='employee'/>
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
                    Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов, включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он помогает клиентам лучше понимать структуру рисков их знеса, улучшать процессы за счет применения новейших технологий и увеличивать продажи, используя самые современные аналитические инструменты.
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
          </>
      }
    </div>
  )

}