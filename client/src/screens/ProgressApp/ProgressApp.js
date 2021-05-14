import React, { useState, useEffect } from "react";
import classes from "./ProgressApp.module.css";
import * as api from "../../api/api";

const ProgressApp = () => {
  let fetched = false;
  const [completed, setCompleted] = useState(0);
  const deadLine = 1624420800000;
  let remainingTime = (deadLine - Date.now()) / (1000 * 60 * 60 * 24);
  const percentage = Math.round(completed / 0.3);

  useEffect(async () => {
    if (!fetched) {
      const progress = await api.fetchProgress();
      setCompleted(progress.completed);
      fetched = true;
    }
  }, [fetched]);

  const handleAdd = async () => {
    const res = await api.incrementProgress();
    res.success && setCompleted(completed + 0.5);
  };

  const handleMinus = async () => {
    const res = await api.decrementProgress();
    res.success && setCompleted(completed - 0.5);
  };

  if (remainingTime < 0) {
    remainingTime = 0;
  }

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h3 className={classes.title}>IELTS 8.0+ Progress</h3>
        <h3 className={classes.title}>
          {" "}
          Time Remaining:
          {" " + Math.round(remainingTime)} Days
        </h3>
      </div>
      <div className={classes.myProgress}>
        <div style={{ width: percentage + "%" }} className={classes.myBar}>
          <p className={classes.progressText}>{percentage + "%"}</p>
        </div>
      </div>
      <div className={classes.numberContainer}>
        <span className={classes.button} onClick={handleMinus}>
          <i class="fas fa-minus"></i>
        </span>
        <h3>{completed} / 30</h3>
        <span className={classes.button} onClick={handleAdd}>
          <i class="fas fa-plus"></i>
        </span>
      </div>
    </div>
  );
};

export default ProgressApp;
