import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      {/* <Counter counterType={"Step"} /> */}
      <Counter counterType={"Count"} />
    </div>
  );
}

function Counter() {
  let [count, setCount] = useState(0);
  let [step, setStep] = useState(1);

  function incrementCount() {
    setCount((c) => {
      return c + 1;
    });
  }

  function decrementCount() {
    setCount((c) => {
      return c - 1;
    });
  }

  function handleStepChange(e) {
    const stepValue = e.target.value;
    console.log(stepValue);
    setStep(stepValue);
  }

  function handleCountChange(e) {
    const countValue = e.target.value;
    setCount(countValue);
  }
  function handleResetClick() {
    setStep(1);
    setCount(0);
  }

  function forcastDate(futureDaysCount) {
    let forcastedDate = new Date();
    forcastedDate.setDate(forcastedDate.getDate() + futureDaysCount);

    return forcastedDate;
  }

  let futureDaysCount = count * step;

  return (
    <div>
      <div className="step">
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => handleStepChange(e)}
        ></input>
        {/* <button onClick={decrementStep}>-</button> */}
        <p>{`Step: ${step}`}</p>
        {/* <button onClick={incrementStep}>+</button> */}
      </div>

      <div className="counter">
        <button onClick={decrementCount}>-</button>
        <input
          type="number"
          min="1"
          value={count}
          onChange={(e) => handleCountChange(e)}
        ></input>
        {/* <p>{`Count: ${count}`}</p> */}
        <button onClick={incrementCount}>+</button>
      </div>

      <p>
        {futureDaysCount === 0 && "Today is "}
        {futureDaysCount > 0 && `${futureDaysCount} days from today is `}
        {futureDaysCount < 0 && `${futureDaysCount} days ago is `}
        {forcastDate(futureDaysCount).toString()}
      </p>

      {step === 1 && count === 0 ? null : (
        <div>
          <button onClick={handleResetClick}>Reset</button>
        </div>
      )}
    </div>
  );
}
