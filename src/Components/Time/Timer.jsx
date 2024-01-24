import React, { useState, useEffect } from "react";
import up from "../../Assets/icons/up.png";
import down from "../../Assets/icons/down.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hours, setHours] = useState(0);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [timeInSeconds, setTimeInSeconds] = useState();

  const incrementSec = () => {
    if (sec === 59) {
      return;
    } else {
      setSec((prevSec) => {
        return prevSec + 1;
      });
    }
  };

  const incrementMin = () => {
    if (min === 59) {
      return;
    } else {
      setMin((prevMin) => {
        return prevMin + 1;
      });
    }
  };

  const incrementHours = () => {
    setHours((prev) => prev + 1);
  };
  const decrementSec = () => {
    if (sec === 0) {
      return;
    } else {
      setSec((prevSec) => {
        return prevSec - 1;
      });
    }
  };

  const decrementMin = () => {
    if (min === 0) {
      return;
    } else {
      setMin((prevMin) => {
        return prevMin - 1;
      });
    }
  };

  const decrementHours = () => {
    if (hours === 0) {
      return;
    }

    setHours((prev) => prev - 1);
  };

  useEffect(() => {
    const convertedTime = sec + min * 60 + hours * 60 * 60;
    setTimeInSeconds(convertedTime);
  }, [sec, min, hours]);

  return (
    <div
      style={{
        width: "60vw",
        height: "35vh",
        background: "#1E2343",
        position: "absolute",
        borderRadius: "12px",
        marginTop: "6px",
        display: "flex",
        boxSizing: "border-box",
        padding: "12px",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}>
      {" "}
      <div>
        {" "}
        <CountdownCircleTimer
          isPlaying={isTimerStarted}
          duration={timeInSeconds}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}>
          {({ remainingTime }) => (
            <span style={{ fontSize: "50px", color: "white" }}>
              {remainingTime}
            </span>
          )}
        </CountdownCircleTimer>
      </div>{" "}
      <div
        style={{
          width: "25vw",
          textAlign: "center",
        }}>
        {" "}
        <div
          style={{
            color: "white",
            display: "flex",
            fontSize: "2rem",
            justifyContent: "space-evenly",
          }}>
          {" "}
          <div
            style={{
              textAlign: "center",
              padding: "3px",
            }}>
            {" "}
            <p>Hours</p>{" "}
            <img
              style={{
                width: "20px",
                height: "20px",
              }}
              onClick={incrementHours}
              src={up}
              alt=""
            />{" "}
            <p>{hours}</p>{" "}
            <img
              style={{
                width: "20px",
                height: "20px",
              }}
              onClick={decrementHours}
              src={down}
              alt=""
            />{" "}
          </div>{" "}
          <div
            style={{
              textAlign: "center",
              padding: "4px",
            }}>
            {" "}
            <p>Minutes</p>{" "}
            <img
              style={{
                width: "20px",
                height: "20px",
              }}
              onClick={incrementMin}
              src={up}
              alt=""
            />{" "}
            <p> {min}</p>{" "}
            <img
              style={{
                width: "20px",
                height: "20px",
              }}
              onClick={decrementMin}
              src={down}
              alt=""
            />{" "}
          </div>{" "}
          <div
            style={{
              textAlign: "center",
              padding: "4px",
            }}>
            {" "}
            <p>Seconds</p>{" "}
            <img
              style={{
                width: "20px",
                height: "20px",
              }}
              onClick={incrementSec}
              src={up}
              alt=""
            />{" "}
            <p> {sec}</p>{" "}
            <img
              style={{
                width: "20px",
                height: "20px",
              }}
              onClick={decrementSec}
              src={down}
              alt=""
            />{" "}
          </div>{" "}
        </div>{" "}
        <div
          onClick={() => setIsTimerStarted(!isTimerStarted)}
          style={{
            background: "#FF6A6A",
            borderRadius: "12px",
            padding: "6px",
            color: "white",
            textAlign: "center",
            cursor: "pointer",
          }}>
          {" "}
          {isTimerStarted ? (
            <p
              onClick={() => {
                setHours(0);
                setMin(0);
                setSec(0);
                setTimeInSeconds(0);
              }}>
              Pause
            </p>
          ) : (
            <p>Start</p>
          )}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Timer;
