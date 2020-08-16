import React, {useCallback, useState} from 'react';
import Title from "../common/title/Title";
import Counter from "./Counter";

function MainCounter() {
  const [incrementByCount, setIncrementByCount] = useState(0);
  const [count, setCount] = useState(0);

  const increaseIncrementByCount = useCallback(() => setIncrementByCount(oldCount => oldCount + 1), []);
  const decreaseIncrementByCount = useCallback(() => {
    if (incrementByCount <= 0) return;

    setIncrementByCount(oldCount => oldCount - 1);
  }, [incrementByCount]);

  const incrementCount = useCallback(() => setCount(oldCount => oldCount + incrementByCount), [incrementByCount]);
  const decrementCount = useCallback(() => setCount(oldCount => oldCount - incrementByCount), [incrementByCount]);

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
      />
      <div className="my-5"/>
      <Counter
        title="Count"
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
    </>
  );
}

MainCounter.route = "/counter";

export default MainCounter;