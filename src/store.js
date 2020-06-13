import { sankey } from "./charts/sankey/Reducers";
import { updateSankey, sankeyReactor } from "./charts/sankey/Epics";
import { composeStore } from "./storeCreator";

export const store = composeStore({
  reducers: {
    sankey,
  },
  initialState: {},
  epics: [updateSankey, sankeyReactor],
});
