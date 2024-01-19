import React, { useState } from "react";

const CounterTen = () => {
  const [count, setCount] = useState([]);
  const [isMessageShown, setIsMessageShown] = useState(false);

  const onMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onPlusClick = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const showMessage = () => {
    if (count < 10 && count > 0) {
      return <p>Keep it going</p>;
    } else if (count === 10) {
      return <p>Reached Max!</p>;
    } else if (!count) {
      return <p>Reached Min!</p>;
    }
  };

  return (
    <div className="counter">
      <div className="button-group">
        <button onClick={onMinusClick}> - </button>
        <p>{count}</p>
        <button onClick={onPlusClick}>+</button>
      </div>
      {showMessage()}
    </div>
  );
};

export default CounterTen;
