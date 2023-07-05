/* eslint-disable import/prefer-default-export */
import { all } from "redux-saga/effects";

import dummySagas from "./dummy/dummy";
import authSagas from "./auth/auth";
import dashboard from "./dashboard/dashboard";
import collections from "./collections/collections";

export default function* rootSaga() {
  yield all([dummySagas(), authSagas(),dashboard(), collections()]);
}
