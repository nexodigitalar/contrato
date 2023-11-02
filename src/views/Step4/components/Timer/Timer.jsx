import "./Timer.scss";

/* Hooks */
import { useState, useEffect } from "react";
import dayjs from "dayjs";

const Timer = ({ envioSms }) => {
  const [disabled, setDisabled] = useState(true);
  const [remainingTime, setRemainingTime] = useState(30);
  const [countdown, setCountdown] = useState(
    new Date(new Date().getTime() + 31000)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdown);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdown]);

  const resetTimer = () => {
    setDisabled(true);
    setCountdown(new Date(new Date().getTime() + 31000));
  };

  const handleCountdown = (timestamp) => {
    const timestampDay = dayjs(timestamp);
    const nowDay = dayjs();
    if (timestampDay.isBefore(nowDay)) {
      setDisabled(false);
      return 0;
    } else {
      const seconds = timestampDay.diff(nowDay, "seconds") % 60;
      return seconds;
    }
  };

  const updateRemainingTime = (countdown) => {
    setRemainingTime(handleCountdown(countdown));
  };

  return (
    <div className="timer_buttonContainer">
      <span className="timer_span">{remainingTime}</span>
      <button
        className="timer_buttonSubtitle"
        onClick={() => {
          envioSms(), resetTimer();
        }}
        disabled={disabled}
      >
        Volver a enviar PIN
      </button>
    </div>
  );
};

export default Timer;
