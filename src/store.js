import { combineReducers, createStore } from "redux";
import { sankey } from "./charts/sankey/Reducer";
import { enhancers } from "./enhancers";
import { updateSankey, sankeyReactor } from "./charts/sankey/Epics";
import { composeStore } from "./storeCreator";

const rootReducer = combineReducers({
  sankey,
});

export const store = composeStore(rootReducer, {}, [
  updateSankey,
  sankeyReactor,
]);
