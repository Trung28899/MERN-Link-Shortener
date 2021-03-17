import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import classes from "./AddLinkScreen.module.css";
import TextBox from "../../components/TextBox/TextBox";
import {
  validateAccessLink,
  validateLink,
} from "../../utilities/helper_functions";

import Modal from "../../components/Modal/Modal";
import BackDrop from "../../components/BackDrop/BackDrop";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addAccessLink } from "../../store/appActions";

import * as api from "../../api/api";

const AddLinkScreen = ({ history }) => {
  const [accessLink, setAccessLink] = useState("");
  const [link, setLink] = useState("");
  const [invalidMsg, setInvalidMsg] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const domainChosen = useSelector((state) => state.appReducer.domainName);
  const dispatch = useDispatch();

  const {
    homeScreenStyle,
    buttonStyle,
    errorStyle,
    errorStyleHide,
    separaterStyle,
  } = classes;

  const setShow = () => {
    console.log("set show");
  };

  const handleLogin = async () => {
    let validator = validateAccessLink(accessLink);
    setOpenModal(true);
    if (!validator) {
      validator = validateLink(link);
    }
    if (!validator) {
      const res = await api.createLink(accessLink, link);
      if (res.linkCreated) {
        dispatch(addAccessLink(accessLink));
        history.push("/confirm");
      } else {
        setInvalidMsg("Vui Lòng Chọn Tên Truy Cập Khác !");
      }
      setOpenModal(false);
    } else {
      setOpenModal(false);
      return setInvalidMsg(validator);
    }
  };

  if (domainChosen) {
    return (
      <div className={homeScreenStyle}>
        <h3>Tạo Đường Link Rút Gọn Của Bạn</h3>
        <TextBox
          placeHolder={"Tên Truy Cập"}
          show={false}
          setContent={setAccessLink}
          setShow={setShow}
          typePW={false}
          value={accessLink}
        />
        <div className={separaterStyle}></div>
        <TextBox
          placeHolder={"Đường Link Dẫn Tới"}
          show={false}
          setContent={setLink}
          setShow={setShow}
          typePW={false}
          value={link}
        />
        <br />
        <h5 className={invalidMsg ? errorStyle : errorStyleHide}>
          * {invalidMsg}
        </h5>
        <Button
          color="primary"
          variant="contained"
          className={buttonStyle}
          onClick={handleLogin}
        >
          Tạo Link Rút Gọn
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
