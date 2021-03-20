import {
  ADDLINKDONE,
  CHOOSE_DOMAIN,
  LOGOUT,
  BACK_UP_DATA,
  ADDLINK,
} from "./appConstants";

export const chooseDomain = (name, url) => async (dispatch) => {
  return dispatch({ type: CHOOSE_DOMAIN, payload: { name: name, url: url } });
};

export const addAccessLink = (accessLink) => async (dispatch) => {
  return dispatch({ type: ADDLINK, payload: accessLink });
};

export const addDone = (addedLink) => async (dispatch) => {
  return dispatch({ type: ADDLINKDONE, payload: addedLink });
};

export const logout = () => async (dispatch) => {
  return dispatch({ type: LOGOUT });
};

export const backUpData = () => async (dispatch) => {
  return dispatch({ type: BACK_UP_DATA });
};
