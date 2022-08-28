import axios from "axios";
import { removeItem } from "../../Utils/localStorage";
import * as types from "./auth.actionTypes";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./auth.actionTypes";

export const signup_succ = (data) => ({
  type: SIGNUP_SUCCESS,
  payload: data,
});

export const signup_req = () => ({
  type: SIGNUP_REQUEST,
});

export const signup_fail = () => ({
  type: SIGNUP_FAILURE,
});

export const login_fail = () => ({
  type: LOGIN_FAILURE,
});

export const login_succ = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

export const login_req = () => ({
  type: LOGIN_REQUEST,
});

export const SignupGet = (email, password) => (dispatch) => {
  console.log(email, password);
  dispatch(signup_req());
  return axios({
    method: "post",
    url: "https://pure-cliffs-12633.herokuapp.com/signup",
    data: {
      email: email,
      password: password,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch(signup_succ(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};
export const LoginGet = (email, password) => (dispatch) => {
  console.log(email, password);
  dispatch(login_req());
  return axios({
    method: "post",
    url: "https://pure-cliffs-12633.herokuapp.com/login",
    data: {
      email: email,
      password: password,
    },
  })
    .then((res) => {
      //        console.log(res.data);
      dispatch(login_succ(res.data));
      // localStorage.setItem('token',res.data.token);
    })
    .catch((err) => {
      dispatch(login_fail());
      console.log(err);
    });
};

export const logout = () => (dispatch) => {
  dispatch({ type: types.LOGOUT });
  removeItem("user");
  removeItem("token");
};
