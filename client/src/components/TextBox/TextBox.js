import React, { useState, useEffect } from "react";
import classes from "./TextBox.module.css";
import { useSelector } from "react-redux";

const TextBox = (props) => {
  const { inputStyle, textBoxContainer, iconContainer } = classes;
  const { setContent, placeHolder, value, accessName, error } = props;
  const [messageStyles, setMessageStyles] = useState([classes.message]);
  const [roofStyles, setRoofStyles] = useState([classes.roof]);
  const [infoPresent, setInfoPresent] = useState(false);
  const chosenUrl = useSelector((state) => state.appReducer.domainName);

  const onChangeHandler = (value) => {
    props.resetError();
    setContent(value.replace(/\s/g, ""));
  };

  const infoClicked = () => {
    setInfoPresent(!infoPresent);
  };

  useEffect(() => {
    setRoofStyles([classes.roof]);

    if (infoPresent) {
      setRoofStyles([classes.roof, classes.infoMessage]);
      setMessageStyles([classes.message, classes.infoMessage]);
    }

    if (error) {
      setRoofStyles([classes.roof, classes.errorMessage]);
      setMessageStyles([classes.message, classes.errorMessage]);
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
          {accessName && !infoPresent && (
            <i className="fas fa-exclamation-circle"></i>
          )}
          {accessName && infoPresent && <i className="fas fa-times-circle"></i>}
          <div className={roofStyles.join(" ")}></div>
        </div>
      </div>
      {(infoPresent || error) && (
        <div className={messageStyles.join(" ")}>
          {error && <h3>{error}</h3>}
          {!error && (
            <h3>
              If you enter access name:{" "}
              <span style={{ fontWeight: "900" }}>newlink</span>, your shorten
              link will be:{" "}
              <span style={{ fontWeight: "900" }}>{chosenUrl}/newlink</span>
            </h3>
          )}
        </div>
      )}
    </div>
  );
};

export default TextBox;
