"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";
import styles from "../page.module.css";

const Timer = () => {
  const [playState, setPlayState] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let timer;

    const tick = () => {
      if (playState) {
        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        } else {
          setSeconds(seconds + 1);
        }

        timer = setTimeout(tick, 1000);
      }
    };

    timer = setTimeout(tick, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [playState, seconds, minutes]);

  return (
    <div className={styles.timer_wrapper}>
      <h1>TIMER</h1>
      <p>{`minutes: ${minutes}, seconds: ${seconds}`}</p>
      <div className={styles.btn_container}>
        <Button
          text="start"
          color="green"
          setPlayState={setPlayState}
          setSeconds={setSeconds}
          setMinutes={setMinutes}
        />
        <Button
          text="stop"
          color="red"
          setPlayState={setPlayState}
          setSeconds={setSeconds}
          setMinutes={setMinutes}
        />
        <Button
          text="reset"
          color="yellow"
          setPlayState={setPlayState}
          setSeconds={setSeconds}
          setMinutes={setMinutes}
        />
      </div>
    </div>
  );
};

export default Timer;
