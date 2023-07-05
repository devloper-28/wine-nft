import * as actionLabels from "../../actionLabels";

const initialState = {
  faqs: [],
  brand: [],
  region: [],
  searchList: [],
  collectionList: {},
  isLoading: false,
  errorMsg: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.FAQ_SUCCESS: {
      return {
        ...state,
        faqs: payload.data.data.data,
      };
    }
    case actionLabels.FAQ_FAIL: {
      return {
        ...state,
        errorMsg: payload,
      };
    }
    // Brand collections
    case actionLabels.BRAND_SUCCESS: {
      return {
        ...state,
        brand: payload.data.data,
      };
    }
    case actionLabels.BRAND_FAIL: {
      return {
        ...state,
        errorMsg: payload,
      };
    }

    // Region collections
    case actionLabels.REGION_SUCCESS: {
      return {
        ...state,
        region: payload.data.data,
      };
    }
    case actionLabels.REGION_FAIL: {
      return {
        ...state,
        errorMsg: payload,
      };
    }

    // collections list
    case actionLabels.COLLECTION_LIST_SAGA: {
      return {
        ...state,
        // collectionList: payload.data.data,
        isLoading: true,
      };
    }
    case actionLabels.COLLECTION_LIST_SUCCESS: {
      return {
        ...state,
        collectionList: payload.data.data,
        isLoading: false,
      };
    }
    case actionLabels.COLLECTION_LIST_FAIL: {
      return {
        ...state,
        errorMsg: payload,
      };
    }

    // collections searched list
    case actionLabels.SEARCH_LIST_SUCCESS: {
      return {
        ...state,
        searchList: payload.data.data,
      };
    }
    case actionLabels.SEARCH_LIST_FAIL: {
      return {
        ...state,
        errorMsg: payload,
      };
    }
    default:
      return state;
  }
};
