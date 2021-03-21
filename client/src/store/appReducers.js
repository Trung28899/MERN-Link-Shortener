import { CHOOSE_DOMAIN, LOGOUT, ADDLINK, ADDLINKDONE } from "./appConstants";

export const appReducer = (
  state = {
    domainURL: "",
    domainName: "",
  },
  action
) => {
  switch (action.type) {
    case CHOOSE_DOMAIN:
      const { name, url } = action.payload;
      return { ...state, domainURL: url, domainName: name };
    case ADDLINK:
      console.log(state);
      return { ...state, accessLink: action.payload };
    case ADDLINKDONE:
      console.log(state);
      return { ...state, domainName: action.payload };
    case LOGOUT:
      return { ...state, domainURL: "", domainName: "" };
    default:
      return state;
  }
};
