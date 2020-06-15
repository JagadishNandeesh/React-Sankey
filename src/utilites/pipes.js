import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/observable/from";
import "rxjs/add/observable/of";
import "rxjs/add/observable/concat";

const fromPromise = (actionCreators, promise) => {
  console.log(promise);
  return promise
    .then((data) => {
      console.log(data);
      return actionCreators.status("LOADED", data);
    })
    .catch((data) => actionCreators.status("FAILED", data));
};

export const asyncSelect = (actionCreators, promise) => (source$) =>
  source$.mergeMap((action) =>
    Observable.concat(
      Observable.of(actionCreators.status("LOADING")),
      fromPromise(actionCreators, promise(action.data))
    )
  );
