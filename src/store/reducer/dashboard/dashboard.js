import * as actionLabels from "../../actionLabels";

const initialState = {
  faqs: [],
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
    default:
      return state;
  }
};
