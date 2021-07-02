import React, { useEffect, useState } from "react";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Counter = ({ value, handleRemoveCounter }) => {
  const [timer, settimer] = useState(0);

  useEffect(() => {
    let intervalId = null;
    intervalId = setInterval(() => {
      settimer((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);
  
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
      <IconButton onClick={() => handleRemoveCounter(value.id)}>
        <DeleteForeverIcon />
      </IconButton>
    </div>
  );
};

export default Counter;
