import React from 'react';
import { useClicker } from '../../hooks';

const Input = () => {
  const count = useClicker(10);
  return (
    <div>
      <h2>Input:</h2>
      <input type='number' value={count} />
    </div>
  );
}

export default Input;
