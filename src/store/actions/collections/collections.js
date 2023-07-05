import * as actionLabels from "../../actionLabels";
  
// Brands of collection

export const brandSaga = (payload) => {
  return {
    type: actionLabels.BRAND_SAGA,
    payload,
  };
};
export const brandSuccess = (payload) => {
  return {
    type: actionLabels.BRAND_SUCCESS,
    payload,
  };
};

export const brandFail = (payload) => ({
  type: actionLabels.BRAND_FAIL,
  payload,
});

 
// Brands of collection

export const regionSaga = (payload) => {
  return {
    type: actionLabels.REGION_SAGA,
    payload,
  };
};
export const regionSuccess = (payload) => {
  return {
    type: actionLabels.REGION_SUCCESS,
    payload,
  };
};

export const regionFail = (payload) => ({
  type: actionLabels.REGION_FAIL,
  payload,
});

// List of collections
export const collectionListSaga = (payload) => {
  return {
    type: actionLabels.COLLECTION_LIST_SAGA,
    payload,
  };
};
export const collectionListSuccess = (payload) => {
  return {
    type: actionLabels.COLLECTION_LIST_SUCCESS,
    payload,
  };
};
export const collectionListFail = (payload) => ({
  type: actionLabels.COLLECTION_LIST_FAIL,
  payload,
});

// List of searched collections
export const searchListSaga = (payload) => {
  return {
    type: actionLabels.SEARCH_LIST_SAGA,
    payload,
  };
};
export const searchListSuccess = (payload) => {
  return {
    type: actionLabels.SEARCH_LIST_SUCCESS,
    payload,
  };
};
export const searchListFail = (payload) => ({
  type: actionLabels.SEARCH_LIST_FAIL,
  payload,
});