import { Register } from "../../pages/Register/Register";
import { Catalog } from "../../pages/Catalog/Catalog";
import { Employee } from '../../pages/Employee/Employee';

export const privateRoutesArray = [
  {path: '/catalog', component: Catalog},
  {path: '/catalog/:id', component: Employee},
]


export const publicRoutesArray = [
  {path: '/register', component: Register},
]