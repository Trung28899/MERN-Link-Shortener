import { CHOOSE_DOMAIN, LOGOUT, BACK_UP_DATA, ADDLINK } from "./appConstants";

export const appReducer = (
  state = {
    domainURL: "",
    domainName: "",
    username: "",
    dataBackedUp: false,
    accessLink: "",
  },
  action
) => {
  switch (action.type) {
    case CHOOSE_DOMAIN:
      const { name, url } = action.payload;
      return { ...state, domainURL: url, domainName: name, username: "" };
    case ADDLINK:
      console.log(state);
      return { ...state, accessLink: action.payload };
    case LOGOUT:
      return { ...state, domainURL: "", domainName: "", username: "" };
    case BACK_UP_DATA:
      console.log(state);
      return { ...state, dataBackedUp: true };
    default:
      return state;
  }
};
