import React, { useState } from "react";
import classes from "./TextBox.module.css";

const TextBox = (props) => {
  const { inputStyle, textBoxContainer, iconContainer } = classes;
  const { setContent, placeHolder, value, accessName } = props;
  const [messageStyles, setMessageStyles] = useState([
    classes.message,
    classes.errorMessage,
  ]);
  const [roofStyles, setRoofStyles] = useState([
    classes.roof,
    classes.errorMessage,
  ]);

  const onChangeHandler = (value) => {
    setContent(value);
  };
  return (
    <div>
      <div className={textBoxContainer}>
        <input
          className={inputStyle}
          type="text"
          placeholder={placeHolder}
          onChange={(e) => onChangeHandler(e.target.value)}
          value={value}
        ></input>
        <div className={iconContainer}>
          {accessName && <i class="fas fa-exclamation-circle"></i>}
          <div className={roofStyles.join(" ")}></div>
        </div>
      </div>
      <div className={messageStyles.join(" ")}>
        <h3>Just a message here</h3>
      </div>
    </div>
  );
};

export default TextBox;
