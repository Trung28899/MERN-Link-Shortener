import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import classes from "./AddLinkScreen.module.css";
import TextBox from "../../components/TextBox/TextBox";
import {
  validateAccessName,
  validateLink,
} from "../../utilities/helper_functions";

const AddLinkScreen = () => {
  const [accessName, setAccessName] = useState("");
  const [link, setLink] = useState("");
  const [invalidMsg] = useState("Hello");
  const [error, setError] = useState({ link: "", accessName: "" });

  const addLinkHandler = async () => {
    const linkError = validateLink(link);
    const accessNameError = validateAccessName(accessName);
    if (accessNameError || linkError) {
      return setError({ link: linkError, accessName: accessNameError });
    }
    console.log("Success");
  };

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
    </div>
  );
};

export default AddLinkScreen;
