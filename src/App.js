import { useState } from 'react';
import './styles.css';
import { button } from './button';



function App()
{
  let initialCurrNumState = "0";
  let initialPrevNumState = "0";
  let initialOperationState = "";
  const [currNum, setCurrNum] = useState(initialCurrNumState);
  const [prevNum, setPrevNum] = useState(initialPrevNumState);
  const [operation, setOperation] = useState(initialOperationState);

  function addNum(num)
  {
    if (num === ".")
    {
      if (!currNum.includes("."))
      {
        setCurrNum(currNum + num);
      }
    }

    else if (currNum === "0")
    {
      setCurrNum(num);
    }

    else 
    {
      setCurrNum(currNum + num);
    }
  }

  function specialNumFunctions(func)
  {
    if (func === "del")
    {
      if (currNum.length === 1)
      {
        setCurrNum(initialCurrNumState);
      }

      else
      {
        setCurrNum(currNum.substring(0, currNum.length - 1));
      }
    }

    else if (func === "C")
    {
      setCurrNum(initialCurrNumState);
    }

    else if (func === "AC")
    {
      setCurrNum(initialCurrNumState);
      setPrevNum(initialPrevNumState);
      setOperation(initialOperationState);
    }

    else if (func === "+/-")
    {
      if (currNum === "0")
      {
        setCurrNum("-");
      }

      else if (currNum === "-")
      {
        setCurrNum(initialCurrNumState);
      }

      else if (currNum.includes("-"))
      {
        setCurrNum(currNum.substring(1, currNum.length));
      }

      else
      {
        setCurrNum("-" + currNum);
      }
    }
  }

  function calculatorOperation(newOperation)
  {
    if (operation !== initialOperationState)
    {
      calculate(true);
    }
    else
    {
      setPrevNum(currNum);
      setCurrNum(initialCurrNumState);
    }

    if (newOperation === "/")
    {
      setOperation("/");
    }

    else if (newOperation === "x")
    {
      setOperation("x");
    }

    else if (newOperation === "+")
    {
      setOperation("+");
    }

    else if (newOperation === "-")
    {
      setOperation("-");
    }

    else if (newOperation === "^")
    {
      setOperation("^");
    }
  }

  function calculate(fromOp)
  {
    if (operation === initialOperationState)
    {
      return;
    }

    let doublePrev = parseFloat(prevNum);
    let doubleCurr = parseFloat(currNum);
    let doubleAnswer = "";

    setPrevNum(initialPrevNumState);

    if (operation === "/")
    {
      doubleAnswer = (doublePrev / doubleCurr).toString();
    }

    else if (operation === "x")
    {
      doubleAnswer = (doublePrev * doubleCurr).toString();
    }

    else if (operation === "+")
    {
      doubleAnswer = (doublePrev + doubleCurr).toString();
    }

    else if (operation === "-")
    {
      doubleAnswer = (doublePrev - doubleCurr).toString();
    }

    else if (operation === "^")
    {
      doubleAnswer = (Math.pow(doublePrev, doubleCurr)).toString();
    }

    if (fromOp)
    {
      setPrevNum(doubleAnswer);
      setCurrNum(initialCurrNumState);
    }
    else
    {
      setCurrNum(doubleAnswer);
      setPrevNum(initialPrevNumState);
    }

    setOperation(initialOperationState);
  }



  return (
    <div className="bg">
      <div className="full-calculator">
        <div className="output">
          <div className="previous-num">{prevNum} {operation}</div>
          <div className="current-num">{currNum}</div>
        </div>

        <button className="span-two-horizontal" onClick={() => specialNumFunctions("AC")}>AC</button>
        {button(specialNumFunctions, "C")}
        {button(calculatorOperation, "/")}
        {button(specialNumFunctions, "del")}
        {button(specialNumFunctions, "+/-")}
        {button(calculatorOperation, "^")}
        {button(calculatorOperation, "x")}
        {button(addNum, "7")}
        {button(addNum, "8")}
        {button(addNum, "9")}
        {button(calculatorOperation, "-")}
        {button(addNum, "4")}
        {button(addNum, "5")}
        {button(addNum, "6")}
        {button(calculatorOperation, "+")}
        {button(addNum, "1")}
        {button(addNum, "2")}
        {button(addNum, "3")}
        <button className="span-two-vertical" onClick={() => calculate(false)}>=</button>
        <button className="span-two-horizontal" onClick={() => addNum("0")}>0</button>
        {button(addNum, ".")}
      </div>

    </div>
  );
}

export default App;
