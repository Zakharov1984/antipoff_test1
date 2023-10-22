import { useHttp } from "../hooks/http.hooks";


export const useDummyService = () => {
  const {request} = useHttp();


  const _apiBase = 'https://dummyjson.com/users';
  const _limit = 8;

  const getEmployees = async (offset) => {
    const data = await request(`${_apiBase}?limit=${_limit}&skip=${offset}`);
    return data.users.map(obj => _transformEmployee(obj)); 
  }

  const getEmployee = async (id) => {
    const data = await request(`${_apiBase}/${id}`);
    return _transformEmployee(data); 
  }

  const _transformEmployee = (resObj) => {
    return {
      id: resObj.id,
      name: `${resObj.firstName} ${resObj.lastName}`,
      img: resObj.image,
      phone: resObj.phone,
      email: resObj.email,
      like: false,
    }
  }

  return {getEmployee, getEmployees};
  
}