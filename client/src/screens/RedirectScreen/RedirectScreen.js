import React, { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { useParams } from "react-router-dom";
import * as api from "../../api/api";

const RedirectScreen = () => {
  const { id } = useParams();

  api.fetchLink(id).then((res) => {
    const { redirectLink, error } = res.data;
    if (error) {
      alert("Link Doesn't Exist");
    } else {
      window.location.href = redirectLink;
    }
  });

  return <Loader></Loader>;
};

export default RedirectScreen;
