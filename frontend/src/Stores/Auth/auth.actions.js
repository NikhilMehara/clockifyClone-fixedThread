import * as types from "./auth.actionTypes";
import axios from "axios";

export const registerUser = (creds) => (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  return axios
    .post("url", creds)
    .then((res) => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.REGISTER_FAILURE });
    });
};

export const loginUser = (creds) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("url", creds)
    .then((res) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_FAILURE });
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: types.LOGOUT });
};
