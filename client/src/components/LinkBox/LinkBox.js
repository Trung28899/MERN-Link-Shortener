import React from "react";
import classes from "./LinkBox.module.css";
import { useDispatch } from "react-redux";
import { chooseDomain } from "../../store/appActions";

const NewLinkBox = (props) => {
  const { content, url } = props;
  const LinkBoxStyle = [classes.LinkBox];
  const pStyle = [classes.p];
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(chooseDomain(content, url));
  };

  return (
    <div className={LinkBoxStyle.join(" ")} onClick={onClickHandler}>
      <div className={classes.socialIconWrapper}>
        <div className={classes.iconPlate}></div>
      </div>
      <h2 className={classes.content}>
        <p className={pStyle.join(" ")}>{content}</p>
      </h2>
      <div className={classes.directIcon}>
        <i className="fas fa-angle-right"></i>
      </div>
    </div>
  );
};

export default NewLinkBox;
