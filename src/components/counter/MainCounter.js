import React, {useState} from 'react';
import Title from "../common/title/Title";
import Counter from "./Counter";

function MainCounter() {
  const [incrementByCount, setIncrementByCount] = useState(0);
  const [count, setCount] = useState(0);

  const increaseIncrementByCount = () => setIncrementByCount(oldCount => oldCount + 1);
  const decreaseIncrementByCount = () => {
    if (incrementByCount <= 0) return;

    setIncrementByCount(oldCount => oldCount - 1);
  };

  const incrementCount = () => setCount(oldCount => oldCount + incrementByCount);
  const decrementCount = () => setCount(oldCount => oldCount - incrementByCount);

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