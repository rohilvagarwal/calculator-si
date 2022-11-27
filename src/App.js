import { useState } from 'react';
import './styles.css';



function App()
{
  let initialCurrNumState = "0";
  let initialPrevNumState = "0";
  let initialOperationState = "";
  const [currNum, setCurrNum] = useState(initialCurrNumState);
  const [prevNum, setPrevNum] = useState(initialPrevNumState);
  const [operation, setOperation] = useState(initialOperationState);

  function changeNum(num)
  {
    if (num === "del")
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

    else if (num === "C")
    {
      setCurrNum(initialCurrNumState);
    }

    else if (num === "AC")
    {
      setCurrNum(initialCurrNumState);
      setPrevNum(initialPrevNumState);
      setOperation(initialOperationState);
    }

    else if (num === "+/-")
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

    else if (num === ".")
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

  function calculatorOperation(newOperation)
  {
    if (operation !== initialOperationState)
    {
      calculate();

      //setPrevNum(currNum);
      //setCurrNum(initialCurrNumState);
      return;
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

    setPrevNum(currNum);
    setCurrNum(initialCurrNumState);
  }

  function calculate()
  {
    if (operation === initialOperationState)
    {
      return;
    }

    let doublePrev = parseFloat(prevNum);
    let doubleCurr = parseFloat(currNum);

    setPrevNum(initialPrevNumState);

    if (operation === "/")
    {
      setCurrNum((doublePrev / doubleCurr).toString());
    }

    else if (operation === "x")
    {
      setCurrNum((doublePrev * doubleCurr).toString());
    }

    else if (operation === "+")
    {
      setCurrNum((doublePrev + doubleCurr).toString());
    }

    else if (operation === "-")
    {
      setCurrNum((doublePrev - doubleCurr).toString());
    }

    else if (operation === "^")
    {
      setCurrNum((Math.pow(doublePrev, doubleCurr)).toString());
    }

    setOperation(initialOperationState);
  }



  return (
    <body>
      <div class="full-calculator">
        <div class="output">
          <div class="previous-num">{prevNum} {operation}</div>
          <div class="current-num">{currNum}</div>
        </div>

        <button class="span-two-horizontal" onClick={() => changeNum("AC")}>AC</button>
        <button onClick={() => changeNum("C")}>C</button>
        <button onClick={() => calculatorOperation("/")}>/</button>
        <button onClick={() => changeNum("del")}>del</button>
        <button onClick={() => changeNum("+/-")}>+/-</button>
        <button onClick={() => calculatorOperation("^")}>^</button>
        <button onClick={() => calculatorOperation("x")}>x</button>
        <button onClick={() => changeNum("7")}>7</button>
        <button onClick={() => changeNum("8")}>8</button>
        <button onClick={() => changeNum("9")}>9</button>
        <button onClick={() => calculatorOperation("-")}>-</button>
        <button onClick={() => changeNum("4")}>4</button>
        <button onClick={() => changeNum("5")}>5</button>
        <button onClick={() => changeNum("6")}>6</button>
        <button onClick={() => calculatorOperation("+")}>+</button>
        <button onClick={() => changeNum("1")}>1</button>
        <button onClick={() => changeNum("2")}>2</button>
        <button onClick={() => changeNum("3")}>3</button>
        <button class="span-two-vertical" onClick={() => calculate()}>=</button>
        <button class="span-two-horizontal" onClick={() => changeNum("0")}>0</button>
        <button onClick={() => changeNum(".")}>.</button>
      </div>

    </body>
  );
}

export default App;
