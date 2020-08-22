import React, { useState } from 'react';
import Keyboard from './keyboard/Keyboard';
import Screen from './screen/Screen';
import './Calculator.css';

function Calculator() {
  const [pressed, setPressed] = useState('');
  const [result, setResult] = useState(0);

  const handleOnClick = (stroke) => {
    if (stroke === 'clear') {
      setPressed('');
      setResult(0);
      return;
    }
    if (stroke === '=') {
      let res = Math.round(eval(pressed) * 100000) / 100000;
      setResult(res);
      setPressed(res.toString());
      return;
    }
    setPressed(pressed + stroke);
  };
  return (
    <div className='calculator'>
      <div className='cells'>
        <img src='../solar_cells.jpg' />
      </div>
      <Screen pressed={pressed} result={result} />
      <Keyboard handleOnClick={handleOnClick} />
    </div>
  );
}

export default Calculator;
