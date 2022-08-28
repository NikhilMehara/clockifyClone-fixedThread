import { getItem, setItem } from "../../Utils/localStorage";
import * as types from "./auth.actionTypes";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./auth.actionTypes";

const initialState = {
  username: getItem("user") || "",
  token: getItem("token") || "",
  message: "",
  isAuth: false,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        isError: false,
      };
    }
    case SIGNUP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        // token:action.payload,
        token: setItem("token", action.payload.token),
        username: setItem("user", action.payload.email),
        isError: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.LOGOUT: {
      return {
        ...state,
        isAuth: false,
      };
    }
    default: {
      return {
        state,
      };
    }
  }
};
