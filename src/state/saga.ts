import { all } from "redux-saga/effects";
import { userSaga } from "./user/userSaga";

export function* rootSaga(): Generator<unknown> {
  yield all([userSaga()]);
}
