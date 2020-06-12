export const SANKEY_LOADING = "SANKEY_LOADING";
export const SANKEY_LOADED = "SANKEY_LOADED";
export const SANKEY_ABORTED = "SANKEY_ABORTED";
export const SANKEY_FALIED = "SANKEY_FALIED";
export const SANKEY_REQUESTED = "SANKEY_REQUESTED";
export const SANKEY_CHANGED = "SANKEY_CHANGED";

export const sankeyStatus = (
  status: "LOADING" | "LOADED" | "ABORTED" | "FAILED",
  data: any
) => {
  let type = "";

  if (status === "LOADING") type = SANKEY_LOADING;
  else if (status === "LOADED") type = SANKEY_LOADED;
  else if (status === "ABORTED") type = SANKEY_ABORTED;
  else type = SANKEY_FALIED;
  return { type, data };
};

export const sankeyRequested = (data) => {
  return {
    type: SANKEY_REQUESTED,
    data: data,
  };
};

export const sankeyChanged = (data) => {
  return {
    type: SANKEY_CHANGED,
    data: data,
  };
};
