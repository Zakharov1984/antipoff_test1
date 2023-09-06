
export class DummyService {
  _apiBase = 'https://dummyjson.com/users';
  _limit = 8;
  _offset = 70;

  getResource = async (url) => {
    const responseObj =  await fetch(url);

    if (!responseObj.ok) throw new Error(`Could not fetch ${url}, status ${responseObj.status}`);

    return await responseObj.json();
  }

  getEmployees = async (offset = this._offset) => {
    console.log(this._offset);
    const data = await this.getResource(`${this._apiBase}?limit=${this._limit}&skip=${offset}`);
    return data.users.map(obj => this._transformEmployee(obj)); 
  }

  getEmployee = async (id) => {
    const data = await this.getResource(`${this._apiBase}/${id}`);
    return this._transformEmployee(data); 
  }

  _transformEmployee = (resObj) => {
    return {
      id: resObj.id,
      name: `${resObj.firstName} ${resObj.lastName}`,
      img: resObj.image,
      phone: resObj.phone,
      email: resObj.email,
      like: false,
    }
  }
  
}