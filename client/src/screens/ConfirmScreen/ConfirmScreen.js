import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import classes from "./ConfirmScreen.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/appActions";
import { useHistory } from "react-router-dom";
import { copyToClipboard } from "../../utilities/helper_functions";

const ConfirmScreen = () => {
  const { confirmScreenStyle, buttonStyle } = classes;
  const { domainName } = useSelector((state) => state.appReducer);
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const fullUrl = `https://${domainName}`;

  const onClickHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  const copyHandler = () => {
    copyToClipboard(fullUrl);
    setCopied(true);
  };

  const onClickLink = () => {
    window.open(fullUrl);
  };

  if (domainName) {
    return (
      <div className={confirmScreenStyle}>
        <h3>YOUR LINK IS SUCCESSFULLY SHORTENED!!</h3>
        <p>The link down below is your shortened link. </p>
        <p onClick={onClickLink}>{domainName}</p>
        <div className={classes.buttonContainer}>
          <Button
            className={buttonStyle}
            variant="contained"
            color="primary"
            onClick={onClickHandler}
          >
            <i className="fas fa-chevron-left"></i>&nbsp; Return
          </Button>

          <Button
            className={classes.copyButton}
            variant="contained"
            color="primary"
            onClick={copyHandler}
          >
            {copied ? (
              <i className="fas fa-check-circle"></i>
            ) : (
              <i className="fas fa-clone"></i>
            )}
            {copied ? "Link Copied" : "Copy Link"}
          </Button>
        </div>
      </div>
    );
  } else {
    history.push("/");
    return <div></div>;
  }
};

export default ConfirmScreen;
