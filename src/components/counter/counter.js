import React, { useEffect, useState, useRef } from "react";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Counter = ({ value, handleRemoveCounter }) => {
  const [timer, settimer] = useState(0);
  const [timerStatus, setTimerStatus] = useState(false);
  const intervalId = useRef();

  const increaseCount = () => settimer((prevCount) => prevCount + 1);

  useEffect(() => {
    if (timerStatus) {
      intervalId.current = setInterval(increaseCount, 1000);
    } else if (!timerStatus && timer !== 0) {
      clearInterval(intervalId.current);
    }
    return () => clearInterval(intervalId.current);
  }, [timer, timerStatus]);

  const handleActive = () => {
    setTimerStatus(!timerStatus);
  };
  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
        alignContent: "center",
        border: `2px solid ${value.color}`,
      }}
    >
      <div style={{ alignSelf: "center" }}>
        <Chip label={timer} variant='outlined' />
      </div>
      <button
        className='btn btn-lg btn-block p-2 btn-light'
        onClick={handleActive}
      >
        {timerStatus ? "Stop " : "Start"}
      </button>
      <IconButton onClick={() => handleRemoveCounter(value.id)}>
        <DeleteForeverIcon />
      </IconButton>
    </div>
  );
};

export default Counter;
