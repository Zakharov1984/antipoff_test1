import { Navigate, Route, Routes } from "react-router-dom";
import { StubPage } from "../../../pages/StubPage/StubPage";
import { privateRoutesArray, publicRoutesArray } from "../../router";
import { useSelector } from "react-redux";

export const AppRouter = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    !isAuth
      ? <Routes>
          {publicRoutesArray.map(el => (<Route key={el.path} path={el.path} element={<el.component/>}/>))}
          <Route path="*" element={<Navigate to="/register" replace={true}/>}/>
        </Routes>
      : <Routes>
          {privateRoutesArray.map(el => (<Route key={el.path} path={el.path} element={<el.component/>}/>))}
          <Route path="/" element={<Navigate to="/catalog" replace={true}/>}/>
          <Route path="/register" element={<Navigate to="/catalog" replace={true}/>}/>
          <Route path="*" element={<StubPage/>}/>
        </Routes>
  )
}