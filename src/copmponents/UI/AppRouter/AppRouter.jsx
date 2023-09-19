import { Route, Routes } from "react-router-dom";
import { StubPage } from "../../../pages/StubPage/StubPage";
import { routes } from "../../router";

export const AppRouter = () => {
  return (
    <Routes>
        {routes.map(el => (<Route key={el.path} path={el.path} element={<el.component/>}/>))}
    </Routes>
  )
}