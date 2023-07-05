import * as actionLabels from "../../actionLabels";

// FAQs action
export const getFaqs = (payload) => {
    return {
      type: actionLabels.FAQ_SAGA,
      payload,
    };
  };
  export const getFaqsSuccess = (payload) => {
    return {
      type: actionLabels.FAQ_SUCCESS,
      payload,
    };
  };
  
  export const getFaqsFail = (payload) => ({
    type: actionLabels.FAQ_FAIL,
    payload,
  });