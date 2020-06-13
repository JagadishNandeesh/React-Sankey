import { SANKEY_CHANGED } from "./Actions";

export const sankey = (state = {}, action) => {
  if (action.type === SANKEY_CHANGED) {
    return Object.assign({}, state, action.data);
  }

  return state;
};
