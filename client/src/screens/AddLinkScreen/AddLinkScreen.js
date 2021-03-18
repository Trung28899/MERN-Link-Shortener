import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import classes from "./AddLinkScreen.module.css";
import TextBox from "../../components/TextBox/TextBox";

const AddLinkScreen = () => {
  const [accessLink, setAccessLink] = useState("");
  const [link, setLink] = useState("");
  const [invalidMsg] = useState("Hello");

  return (
    <div className={classes.homeScreenStyle}>
      <h3>Enter Your Link and Access Name</h3>
      <TextBox
        placeHolder={"Enter Your Link"}
        setContent={setLink}
        value={link}
      />
      <div className={classes.separaterStyle}></div>
      <TextBox
        placeHolder={"Enter Access Name"}
        setContent={setAccessLink}
        value={accessLink}
        accessName={true}
      />
      <br />
      <h5 className={classes.errorStyleHide}>* {invalidMsg}</h5>
      <Button
        color="primary"
        variant="contained"
        className={classes.buttonStyle}
      >
        Shortern Your Link
      </Button>
    </div>
  );
};

export default AddLinkScreen;
