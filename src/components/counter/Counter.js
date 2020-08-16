import React, {useRef} from "react";
import Proptypes from "prop-types";

function Counter({title, count, incrementCount, decrementCount, resetCounter}) {
  const interval = useRef(0);

  const startAction = (action) => {
    if (interval.current) clearInterval(interval.current);
    interval.current = setInterval(action, 300);
  }

  const endAction = () => {
    clearInterval(interval.current);
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className="flex-column">
        <h4 className="text-center">{title} : {count}</h4>
        <div className="row">
          <button
            type="button"
            className="btn btn-success"
            onMouseDown={() => startAction(incrementCount)}
            onMouseUp={() => endAction()}
            onClick={incrementCount}>
            Increment
          </button>
          <button
            type="button"
            className="btn btn-danger mx-2"
            onMouseDown={() => startAction(decrementCount)}
            onMouseUp={() => endAction()}
            onClick={decrementCount}>
            Decrement
          </button>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={resetCounter}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

Counter.prototype = {
  title: Proptypes.string.isRequired,
  count: Proptypes.number.isRequired,
  incrementCount: Proptypes.func.isRequired,
  decrementCount: Proptypes.func.isRequired,
};

export default React.memo(Counter);
