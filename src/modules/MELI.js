import axios from 'axios';
const url = 'https://api.mercadolibre.com/sites/MLA/search?q=chromecast'

export const getResults = (q) => { return axios.get(url)};
