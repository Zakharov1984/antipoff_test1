import { Register } from "../../pages/Register/Register";
import { Catalog } from "../../pages/Catalog/Catalog";
import { Employee } from '../../pages/Employee/Employee';

export const routes = [
  {path: '/register', component: Register},
  {path: '/catalog', component: Catalog},
  {path: '/catalog/:id', component: Employee},
]