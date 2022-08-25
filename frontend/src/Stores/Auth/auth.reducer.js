import { getItem } from "../../Utils/localStorage";

const initialState = {
  username: getItem("user") || "",
  token: getItem("token") || "",
  isAuth: false,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
