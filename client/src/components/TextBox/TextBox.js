import React, { useState, useEffect } from "react";
import classes from "./TextBox.module.css";

const TextBox = (props) => {
  const { inputStyle, textBoxContainer, iconContainer } = classes;
  const { setContent, placeHolder, value, accessName, error } = props;
  const [messageStyles, setMessageStyles] = useState([classes.message]);
  const [roofStyles, setRoofStyles] = useState([classes.roof]);
  const [infoPresent, setInfoPresent] = useState(false);

  const onChangeHandler = (value) => {
    props.resetError();
    setContent(value.toLowerCase().replace(/\s/g, ""));
  };

  const infoClicked = () => {
    setInfoPresent(!infoPresent);
  };

  useEffect(() => {
    setRoofStyles([classes.roof]);

    if (error) {
      setRoofStyles([classes.roof, classes.errorMessage]);
      setMessageStyles([classes.message, classes.errorMessage]);
    }

    if (infoPresent) {
      setRoofStyles([classes.roof, classes.infoMessage]);
      setMessageStyles([classes.message, classes.infoMessage]);
    }
  }, [infoPresent, error]);

  return (
    <div>
      <div
        className={
          error && !infoPresent
            ? classes.textBoxContainerError
            : textBoxContainer
        }
      >
        <input
          className={inputStyle}
          type="text"
          placeholder={placeHolder}
          onChange={(event) => onChangeHandler(event.target.value)}
          value={value}
        ></input>
        <div className={iconContainer} onClick={infoClicked}>
          {accessName && <i className="fas fa-exclamation-circle"></i>}
          <div className={roofStyles.join(" ")}></div>
        </div>
      </div>
      {(infoPresent || error) && (
        <div className={messageStyles.join(" ")}>
          <h3>Just a message here</h3>
        </div>
      )}
    </div>
  );
};

export default TextBox;
