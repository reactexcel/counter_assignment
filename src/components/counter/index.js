import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import TimeCounter from "./counter";

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const Counter = () => {
  const [counterList, setCounterList] = useState([]);
  const [isMaxLimit, setIsMaxLimit] = useState(false);

  const handleAddCounter = () => {
    if (counterList?.length < 4) {
      setCounterList((prev) => [...prev, {id:Math.random(),color:`#${(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)}`}]);
    } else {
      setIsMaxLimit(true);
    }
  };

  const handleRemoveCounter = (counterId) => {
    const newCounterList=[...counterList?.filter((val) => val.id !== counterId)]
    setCounterList(newCounterList);
  };

  const handleClose = () => {
    setIsMaxLimit(false);
  };
  return (
    <div>
      <button onClick={handleAddCounter}>
        <AddIcon />
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {counterList?.map((value, i) => {
          return (
            <div key={value.id}>
              <TimeCounter
                value={value}
                handleRemoveCounter={handleRemoveCounter}
              />
            </div>
          );
        })}
      </div>
      <Snackbar open={isMaxLimit} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity='warning'>Maximum Limit reached!</Alert>
      </Snackbar>
    </div>
  );
};

export default Counter;
