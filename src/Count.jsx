import React from 'react';
import { useAppStore } from './store/store';
import { shallow } from 'zustand/shallow';

const Count = () => {
  // const store = useAppStore();
  // const counter = store.counter;
  // const decrement = useAppStore((state) => state.decrement);
  // const increment = useAppStore((state) => state.increment);
  const [decrement, increment] = useAppStore((state) => [state.decrement, state.increment], shallow);
  // const count = useAppStore((state) => state.count);

  // console.log(increment);
  // console.log(decrement);

  // console.log('render count');
  return (
    <div>
      <button onClick={decrement}>-</button>
      {/* <span>counts : {count}</span> */}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Count;
