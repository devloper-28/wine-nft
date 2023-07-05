/* eslint-disable import/prefer-default-export */
import { all, takeEvery, put, call } from "redux-saga/effects";
import {
  brandFail,
  brandSuccess,
  collectionListFail,
  collectionListSuccess,
  regionFail,
  regionSuccess,
  searchListFail,
  searchListSuccess,
} from "../../actions";
import * as actionLabels from "../../actionLabels";
import axiosMain from "../../../http/axios/axios_main";

// eslint-disable-next-line no-unused-vars
function* brandSaga() {
  try {
    const response = yield axiosMain
      .get("/user/bottleBrands")
      .then((res) => res)
      .catch((err) => err);
    if (response.status === 200) {
      yield put(brandSuccess({ data: response.data }));
    } else {
      yield put(brandFail("error"));
    }
  } catch (error) {
    console.log(error);
  }
}
function* regionSaga() {
  try {
    const response = yield axiosMain
      .get("/user/bottleRegions")
      .then((res) => res)
      .catch((err) => err);
    if (response.status === 200) {
      yield put(regionSuccess({ data: response.data }));
    } else {
      yield put(regionFail("error"));
    }
  } catch (error) {
    console.log(error);
  }
}

// collection list saga
function* collectionListSaga(action) {
  const { searchTerm, rarity, region, brand, sortBy, key } =
    action.payload;
  try {
    const response = yield axiosMain
      .post(
        "/user/searchBottles",
        {},
        {
          params: {
            rarity: rarity ? rarity?.toUpperCase() : null,
            region: region ? region?.toUpperCase() : null,
            searchTerm: searchTerm ? searchTerm : null,
            brand: brand ? brand : null,
            sortBy: sortBy ? sortBy : null,
            sortKey: key ? key : null,
            
          },
        }
      )
      .then((res) => res)
      .catch((err) => err);
    if (response.status === 200) {
      yield put(collectionListSuccess({ data: response.data }));
    } else {
      yield put(collectionListFail("error"));
    }
  } catch (error) {
    console.log(error);
  }
}

// search collection list saga
// function* searchListSaga(action) {
//   const { searchTerm } = action.payload;
//   // console.log(data,"Acd");
//   try {
//     const response = yield axiosMain
//       .post(`/user/searchBottles?searchTerm=${searchTerm}`)
//       .then((res) => res)
//       .catch((err) => err);
//     if (response.status === 200) {
//       yield put(searchListSuccess({ data: response.data }));
//     } else {
//       yield put(searchListFail("error"));
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
export default function* collections() {
  yield all([
    yield takeEvery(actionLabels.BRAND_SAGA, brandSaga),
    yield takeEvery(actionLabels.REGION_SAGA, regionSaga),
    yield takeEvery(actionLabels.COLLECTION_LIST_SAGA, collectionListSaga),
    // yield takeEvery(actionLabels.SEARCH_LIST_SAGA, searchListSaga),
  ]);
}
