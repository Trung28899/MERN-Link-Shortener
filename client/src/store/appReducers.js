import { AUTHENTICATE, LOGOUT, BACK_UP_DATA, ADDLINK } from "./appConstants";

export const appReducer = (
  state = {
    loggedIn: false,
    username: "",
    dataBackedUp: false,
    accessLink: "",
  },
  action
) => {
  switch (action.type) {
    case AUTHENTICATE:
      console.log(state);
      return { ...state, loggedIn: true, username: action.payload };
    case ADDLINK:
      console.log(state);
      return { ...state, accessLink: action.payload };
    case LOGOUT:
      return { ...state, loggedIn: false, username: "" };
    case BACK_UP_DATA:
      console.log(state);
      return { ...state, dataBackedUp: true };
    default:
      return state;
  }
};
