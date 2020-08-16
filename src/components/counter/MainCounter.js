import React, {useCallback, useState} from 'react';
import Title from "../common/title/Title";
import Counter from "./Counter";

function MainCounter() {
  const [incrementByCount, setIncrementByCount] = useState(1);
  const [count, setCount] = useState(0);

  const increaseIncrementByCount = useCallback(() => setIncrementByCount(oldCount => oldCount + 1), []);
  const decreaseIncrementByCount = useCallback(() => {
    if (incrementByCount <= 1) return;

    setIncrementByCount(oldCount => oldCount - 1);
  }, [incrementByCount]);
  const resetIncrementByCount = useCallback(() => setIncrementByCount(1), []);

  const incrementCount = useCallback(() => setCount(oldCount => oldCount + incrementByCount), [incrementByCount]);
  const decrementCount = useCallback(() => setCount(oldCount => oldCount - incrementByCount), [incrementByCount]);
  const resetCount = useCallback(() => setCount(0), []);

  const resetBothCounts = useCallback(() => {
    resetIncrementByCount();
    resetCount();
  }, [resetIncrementByCount,resetCount]);

  return (
    <>
      <Title
        title="Counter App"
        subtitle="This example demonstrate the use of set state hook, while state depends upon old state."
      />
      <div className="alert alert-info">
        You can long press on buttons to change count automatically.
      </div>
      <Counter
        title="Increment By"
        count={incrementByCount}
        incrementCount={increaseIncrementByCount}
        decrementCount={decreaseIncrementByCount}
        resetCounter={resetIncrementByCount}
      />
      <div className="my-5"/>
      <Counter
        title="Count"
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        resetCounter={resetCount}
      />
      <div className="d-flex justify-content-center my-5">
      <button
        type="button"
        className="btn btn-primary mx-2"
        onClick={resetBothCounts}>
        Reset Both
      </button>
      </div>
    </>
  );
}

MainCounter.route = "/counter";

export default MainCounter;