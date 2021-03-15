import React from "react";
import classes from "./TextBox.module.css";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";

const TextBox = (props) => {
  const { inputStyle, textBoxContainer } = classes;
  const { show, setShow, setContent, placeHolder, typePW, value } = props;
  const onChangeHandler = (value) => {
    setContent(value);
  };
  return (
    <div className={textBoxContainer}>
      <input
        className={inputStyle}
        type={!show ? "text" : "password"}
        placeholder={placeHolder}
        onChange={(e) => onChangeHandler(e.target.value)}
        value={value}
      ></input>
      {typePW && (
        <IconButton
          aria-label="toggle password visibility"
          onClick={() => setShow(!show)}
          edge="end"
        >
          {show ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      )}
    </div>
  );
};

export default TextBox;
