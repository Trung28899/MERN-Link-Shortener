import axios from "axios";

const baseURL = process.env.REACT_APP_PROD_URL;
// const baseURL = process.env.REACT_APP_DEV_URL;

const urlLink = {
  create: baseURL + "/link/create/",
  auth: baseURL + "/auth",
  fetchProgress: baseURL + "/progress",
  progressInc: baseURL + "/progress/increment",
  progressDec: baseURL + "/progress/decrement",
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

export const fetchLink = async (accessName, domainURL) => {
  try {
    const res = await axios.post(baseURL + "/" + accessName, {
      domainURL: domainURL,
    });
    return res.data;
  } catch (error) {
    return {
      redirectLink: "",
      error: true,
      errorMessage: `Error making a request to redirect. Please try again ! \nError: ${error.message}`,
    };
  }
};

export const fetchProgress = async () => {
  const res = await axios.get(urlLink.fetchProgress);
  return res.data;
};

export const incrementProgress = async () => {
  const res = await axios.get(urlLink.progressInc);
  return res.data;
};

export const decrementProgress = async () => {
  const res = await axios.get(urlLink.progressDec);
  return res.data;
};
