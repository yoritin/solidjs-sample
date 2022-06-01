import { createSignal } from "solid-js";

const Counter = () => {
  const [count, setCount] = createSignal(0);
  return (
    <>
      <div>count: {count()}</div>
      <button onClick={() => setCount(count() + 1)}>+</button>
    </>
  );
};

export default Counter;
