import axios from 'axios';
const url = 'https://api.mercadolibre.com/sites/MLA/search?q='

export const getResults = (q) => { return axios.get(`${url}${q}&limit=4`)};
