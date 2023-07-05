/* eslint-disable import/prefer-default-export */
import { all, takeEvery, put, call } from "redux-saga/effects";
import { getFaqsFail, getFaqsSuccess } from "../../actions";
import * as actionLabels from "../../actionLabels";
import axiosMain from "../../../http/axios/axios_main";

// eslint-disable-next-line no-unused-vars
function* faqsSaga() {
  // const {data}= action.payload;
  // console.log(data,"Acd");
  try {
    const response = yield axiosMain
      .get("/faq/getAllFAQ")
      .then((res) => res)
      .catch((err) => err);
    if (response.status === 200) {
      yield put(getFaqsSuccess({ data: response.data }));
    } else {
      yield put(getFaqsFail("error"));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* dashboard() {
  yield all([yield takeEvery(actionLabels.FAQ_SAGA, faqsSaga)]);
}
