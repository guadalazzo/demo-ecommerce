import { SET_ITEMS, SET_QUERY } from './types';

export const itemsReducer = (state, action) => {
  switch (action.type) {
    case SET_ITEMS: 
      return {
        ...state,
        items: action.payload //contiene la info del store
      }
      break;
    case SET_QUERY:
      return {
        ...state,
        query: action.payload 
      }
      break;
  
    default:
      return state;
  }
}