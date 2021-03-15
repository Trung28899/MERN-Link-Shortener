import { AUTHENTICATE, LOGOUT, BACK_UP_DATA, ADDLINK } from "./appConstants";

export const authenticate = (password) => async (dispatch) => {
  return dispatch({ type: AUTHENTICATE, payload: password });
};

export const addAccessLink = (accessLink) => async (dispatch) => {
  return dispatch({ type: ADDLINK, payload: accessLink });
};

export const logout = () => async (dispatch) => {
  return dispatch({ type: LOGOUT });
};

export const backUpData = () => async (dispatch) => {
  return dispatch({ type: BACK_UP_DATA });
};
