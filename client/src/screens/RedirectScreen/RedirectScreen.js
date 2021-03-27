import React from "react";
import Loader from "../../components/Loader/Loader";
import { useParams } from "react-router-dom";
import * as api from "../../api/api";
// import { useSelector, useDispatch } from "react-redux";

const RedirectScreen = () => {
  const { id } = useParams();
  const domainURL = window.location.origin;

  api.fetchLink(id, domainURL).then((result) => {
    const { redirectLink, error, errorMessage } = result;
    if (error) {
      alert(errorMessage);
    } else {
      window.location.href = redirectLink;
    }
  });

  return <Loader></Loader>;
};

export default RedirectScreen;
