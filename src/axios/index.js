import axios from 'axios';


export default (method, url, data) => {
  const headers = { 'content-type': 'application/json' };

  const optionsGet = {
    method,
    headers,
    url,
  };

  const optionsPut = {
    method,
    headers,
    data,
    url,
  };

  switch (method) {
    case 'GET':
      return axios(optionsGet);

    case 'PATCH':
      return axios(optionsPut);

    default:
      return new Error('Wrong parameters');
  }
};
