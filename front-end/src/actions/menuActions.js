import drinks from '../assets/drinks.json';

import { UPDATE_DRINKS } from './types';

export const getDrinks = (shop) => async dispatch => {
  let milk = [];
  let fruit = [];
  let all = [];

  for (let drink in drinks) {
    if (drinks[drink]['type'] === 'milk') {
      milk.push([drink, drinks[drink]]);
    }
    else {
      fruit.push([drink, drinks[drink]]);
    }
    if ( shop ) {
      if( drinks[drink]['shop'] === shop ) {
        all.push([drink, drinks[drink]])
      }
    } else {
      all.push([drink, drinks[drink]]);
    }
  }

  dispatch({
    type: UPDATE_DRINKS,
    payload: {
      drinks: all
    }
  });
}
