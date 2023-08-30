
const errorMessageInForm = (type) => {
  switch (type) {
    case 'name': 
      return 'Ошибка: имя не должно быть от 3 символов';
    case 'email':
      return 'Ошибка: почта должна соответсвовать - login@domen';
    case 'password':
      return 'Ошибка: пароль должен быть от 5 символов';
    case 'checkPassword':
        return 'Ошибка: пароли различны';
    default:
      break;
  }
}