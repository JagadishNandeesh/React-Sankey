import { Observable } from "rxjs";
import { filter, mapTo } from "rxjs/operators";
import { asyncSelect } from "../../utilites/pipes";
import {
  sankeyStatus,
  SANKEY_REQUESTED,
  SANKEY_LOADED,
  sankeyChanged,
} from "./Actions";
import "rxjs/add/operator/let";
import { requestSankeyData } from "./Api";

export const updateSankey = (action$) =>
  action$.ofType(SANKEY_REQUESTED).let(
    asyncSelect(
      {
        status: sankeyStatus,
      },
      (args) => requestSankeyData(args)
    )
  );

export const sankeyReactor = (action$) =>
  action$.ofType(SANKEY_LOADED).mergeMap((action) => {
    return Observable.of(sankeyChanged(action.data));
  });
