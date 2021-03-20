import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import classes from "./AddLinkScreen.module.css";
import TextBox from "../../components/TextBox/TextBox";
import {
  validateAccessName,
  validateLink,
} from "../../utilities/helper_functions";
import Modal from "../../components/Modal/Modal";
import BackDrop from "../../components/BackDrop/BackDrop";
import { useSelector, useDispatch } from "react-redux";
import * as api from "../../api/api";
import { addDone } from "../../store/appActions";
import { useHistory } from "react-router-dom";

const AddLinkScreen = () => {
  const [accessName, setAccessName] = useState("");
  const [link, setLink] = useState("");
  const [invalidMsg] = useState("Hello");
  const [error, setError] = useState({ link: "", accessName: "" });
  const [openModal, setOpenModal] = useState(false);
  const { domainURL, domainName } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const addLinkHandler = () => {
    setOpenModal(true);
    const linkError = validateLink(link);
    const accessNameError = validateAccessName(accessName);
    if (accessNameError || linkError) {
      setOpenModal(false);
      return setError({ link: linkError, accessName: accessNameError });
    }
    return dataBaseWork();
  };

  const dataBaseWork = async () => {
    const result = await api.createLink(
      accessName,
      link,
      domainName,
      domainURL
    );
    if (!result.linkCreated) {
      setOpenModal(false);
      return setError({ ...error, accessName: result.error });
    }
    dispatch(addDone(`${domainName}/${accessName}`));
    setTimeout(() => {
      setOpenModal(false);
      return history.push("/confirm");
    }, 900);
  };

  if (domainName) {
    return (
      <div className={classes.homeScreenStyle}>
        <h3>Enter Your Link and Access Name</h3>
        <TextBox
          placeHolder={"Enter Your Link"}
          setContent={setLink}
          value={link}
          error={error.link}
          resetError={() => setError({ ...error, link: "" })}
        />
        <div className={classes.separaterStyle}></div>
        <TextBox
          placeHolder={"Enter Access Name"}
          setContent={setAccessName}
          value={accessName}
          error={error.accessName}
          accessName={true}
          resetError={() => setError({ ...error, accessName: "" })}
        />
        <br />
        <h5 className={classes.errorStyleHide}>* {invalidMsg}</h5>
        <Button
          color="primary"
          variant="contained"
          className={classes.buttonStyle}
          onClick={addLinkHandler}
        >
          Shortern Your Link
        </Button>
        <Modal show={openModal} />
        <BackDrop show={openModal} />
      </div>
    );
  } else {
    history.push("/");
    return <div></div>;
  }
};

export default AddLinkScreen;
