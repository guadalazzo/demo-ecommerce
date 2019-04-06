import { SET_ITEMS, SET_QUERY } from './types';
import { getResults } from './../modules/MELI';

//Action Creator: función que devuelve un objeto "action"
export const setItems = (items=[]) => {
  return {
    type: SET_ITEMS,
    payload: items,
  }
}
export const setQuery = (query="") => {
  return {
  type: SET_QUERY,
  payload: query,
  }
}
// Esta función es capturada por Thunk , se ejecuta y luego llama a una action creator
export const getResultsItems = (query) => dispatch => {
  getResults(query).then(res => {
    console.log(res,"res");
    dispatch(setItems(res.data.results));
  }).catch(err=> console.log('ERROR: ',err))
}
