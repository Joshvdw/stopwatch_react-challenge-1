import React from "react";
import styles from "../page.module.css";

const Button = ({ text, color, setPlayState, setSeconds, setMinutes }) => {
  const dynamicColorClass = styles[`btn_${color}`];

  function clickHandler() {
    const playState = text == "start" ? true : false;
    if (text == "reset") {
      setPlayState(false);
      setSeconds(0);
      setMinutes(0);
    } else {
      setPlayState(playState);
    }
  }

  return (
    <div
      className={`${styles.button_wrapper} ${dynamicColorClass}`}
      onClick={clickHandler}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
