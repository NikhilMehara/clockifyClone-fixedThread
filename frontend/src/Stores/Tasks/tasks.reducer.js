import * as types from "./tasks.actionTypes";

const initialState = {
  tasks: [],
  projects: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PROJECT_SUCCESS: {
      return {
        ...state,
        projects: payload,
        isLoading: false,
        isError: false,
      };
    }
    default:
      return state;
  }
};
