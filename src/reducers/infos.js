import { INFOS } from '../actions/index';

const infosReducer = (state = [], action) => {
  switch (action.type) {
    case INFOS:
      return [...action.payload];
    default:
      return state;
  }
};

export default infosReducer;