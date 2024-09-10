import React, { useEffect, useState } from 'react';

const GlobalCounter = () => {
  // console.log('render');

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handlerClick = () => {
    console.log('click');
    setCount(count => count + step);//1
  }
  const handlerInput = ({ target: { value } }) => {
    setStep(Number(value))
  }
  useEffect(() => {
    console.log('addEventListener');
    window.addEventListener('click', handlerClick);
    return () => {
      console.log('removeEventListener');
      window.removeEventListener('click', handlerClick);
    }
  }, [step]);

  return (
    <div>
      <h2>Global Counter</h2>
      <h2>count: {count}</h2>
      <input type='number' value={step} onChange={handlerInput} />
    </div>
  );
}

export default GlobalCounter;
