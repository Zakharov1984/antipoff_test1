export const changePhone = (phone) => {
  if(!phone) return;

  let regEpx = /\s/g;
  return phone.replace(regEpx, '');
} 