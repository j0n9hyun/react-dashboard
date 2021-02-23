import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { test } from './columnSlice';

export function Column() {
  const count = useSelector((state) => state.column);
  console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {/* <button onClick={tt}>Increment</button> */}
        <span>{count}</span>
      </div>
    </div>
  );
}
