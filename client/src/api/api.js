import axios from "axios";

const baseURL = process.env.REACT_APP_PROD_URL;
const urlLink = {
  create: baseURL + "/link/create/",
  auth: baseURL + "/auth",
};

export const validateLogin = async (password) => {
  try {
    const res = await axios.post(urlLink.auth, { password: password });
    return res.data;
  } catch (error) {
    return { error: "there is error" };
  }
};

export const createLink = async (
  accessName,
  redirectLink,
  domainName,
  domainURL
) => {
  const res = await axios.post(urlLink.create, {
    accessName: accessName,
    redirectLink: redirectLink,
    domainName: domainName,
    domainURL: domainURL,
  });
  return res.data;
};

export const fetchLink = async (accessName) => {
  const res = await axios.get(baseURL + "/" + accessName);
  return res;
};
