import { getItem } from "../../Utils/localStorage";
import * as types from "./tasks.actionTypes";
import axios from "axios";

export const createProject = (payload) => (dispatch) => {
  const token = getItem("token");
  console.log(token);
  dispatch({ type: types.CREATE_PROJECT_REQUEST });
  return axios
    .post(`http://localhost:7000/project/new`, payload, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({ type: types.CREATE_PROJECT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: types.CREATE_PROJECT_FAILURE, err });
    });
};

export const getProjects = () => (dispatch) => {
  const user = getItem("user");
  const token = getItem("token");
  dispatch({ type: types.GET_PROJECT_REQUEST });
  return axios
    .get(`http://localhost:7000/project/?useremail=${user}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      dispatch({ type: types.GET_PROJECT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_PROJECT_FAILURE });
    });
};

export const deleteProject = (id) => (dispatch) => {
  const token = getItem("token");
  dispatch({ type: types.DELETE_PROJECT_REQUEST });
  return axios
    .delete(`http://localhost:7000/project/delete/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      dispatch({ type: types.DELETE_PROJECT_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: types.DELETE_PROJECT_FAILURE });
    });
};
