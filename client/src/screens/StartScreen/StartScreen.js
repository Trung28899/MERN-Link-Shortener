import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import classes from "./StartScreen.module.css";
import TextBox from "../../components/TextBox/TextBox";
import Modal from "../../components/Modal/Modal";
import BackDrop from "../../components/BackDrop/BackDrop";

import { useDispatch } from "react-redux";
import { authenticate } from "../../store/appActions";
import * as api from "../../api/api";

const StartScreen = ({ history }) => {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(true);
  const [invalid, setInvalid] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { homeScreenStyle, buttonStyle, errorStyle, errorStyleHide } = classes;
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setOpenModal(true);
    console.log(password);
    const passwordValidated = await api.validateLogin(password);
    console.log(passwordValidated);
    if (passwordValidated) {
      setInvalid(false);
      dispatch(authenticate(password));
      setTimeout(() => {
        setOpenModal(false);
        return history.push("/addlink");
      }, 1000);
    } else {
      setInvalid(true);
      setOpenModal(false);
    }
  };

  return (
    <div className={homeScreenStyle}>
      <h3>App Rút Gọn Đường Link OTC</h3>
      <TextBox
        placeHolder={"Mật Khẩu"}
        show={show}
        setContent={setPassword}
        setShow={setShow}
        typePW={true}
      />
      <br />
      <h5 className={invalid ? errorStyle : errorStyleHide}>
        * Mật Khẩu Không Đúng
      </h5>
      <Button
        color="primary"
        variant="contained"
        className={buttonStyle}
        onClick={handleLogin}
      >
        Đăng Nhập
      </Button>
      <Modal show={openModal} />
      <BackDrop show={openModal} />
    </div>
  );
};

export default StartScreen;
