import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import todos from "./todos";
import posts, { postsSaga } from "./posts";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  counter,
  todos,
  posts,
});

export function* rootSaga() {
  yield all([counterSaga(), postsSaga()]);
}

export default rootReducer;
