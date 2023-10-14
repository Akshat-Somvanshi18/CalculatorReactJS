import React, { useState } from "react";

const Task2 = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(input));
      setInput(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const handleBackspace = () => {
    if(input.length != 0)
    {
      var str = input.toString();
      str = str.slice(0,str.length-1);
      setInput(str);
    }
  };
  return (
    <>
    <div className="main">
      <div className="task2Div shadow mx-auto rounded-5">
        <input type="text" value={input} readOnly className="task2Input border-0 rounded-top-3 px-3"/>
        <div className="buttons ">
          <div>
            <button onClick={() => handleInput("7")} className="task2Btn">7</button>
            <button onClick={() => handleInput("8")} className="task2Btn">8</button>
            <button onClick={() => handleInput("9")} className="task2Btn">9</button>
            <button onClick={handleBackspace} className="task2Btn">←</button>
          </div>
          <div>
            <button onClick={() => handleInput("4")} className="task2Btn">4</button>
            <button onClick={() => handleInput("5")} className="task2Btn">5</button>
            <button onClick={() => handleInput("6")} className="task2Btn">6</button>
            <button onClick={() => handleInput("/")} className="task2Btn">/</button>
          </div>
          <div>
            <button onClick={() => handleInput("1")} className="task2Btn">1</button>
            <button onClick={() => handleInput("2")} className="task2Btn">2</button>
            <button onClick={() => handleInput("3")} className="task2Btn">3</button>
            <button onClick={() => handleInput("*")} className="task2Btn">*</button>
          </div>
          <div >
          <button onClick={() => handleInput("0")} className="task2Btn2">0</button>
            <button onClick={() => handleInput(".")} className="task2Btn2">.</button>
            <button onClick={calculate} className="task2Btn2">=</button>
            <button onClick={() => handleInput("+")} className="task2Btn2">+</button>
            <button onClick={() => handleInput("-")} className="task2Btn2">-</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Task2;
