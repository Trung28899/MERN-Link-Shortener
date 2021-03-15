import React from "react";
import Button from "@material-ui/core/Button";
import classes from "./ConfirmScreen.module.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useSelector } from "react-redux";

const ConfirmScreen = ({ history }) => {
  const { confirmScreenStyle, buttonStyle } = classes;
  const accessLink = useSelector((state) => state.appReducer.accessLink);
  const loggedIn = useSelector((state) => state.appReducer.loggedIn);
  const onClickHandler = () => {
    history.push("/addlink");
  };
  const onClickLink = () => {
    window.open(`https://rutgon.live/${accessLink}`);
  };

  if (loggedIn) {
    return (
      <div className={confirmScreenStyle}>
        <h3>LINK RÚT GỌN KHỞI TẠO THÀNH CÔNG</h3>
        <p>Nhấp vào link dưới đây để truy cập đường link rút gọn của bạn</p>
        <p onClick={onClickLink}>rutgon.live/{accessLink}</p>
        <Button
          className={buttonStyle}
          variant="contained"
          color="primary"
          onClick={onClickHandler}
        >
          <ArrowBackIosIcon /> Quay Lại
        </Button>
      </div>
    );
  } else {
    history.push("/");
    return <div></div>;
  }
};

export default ConfirmScreen;
