import "./App.css";
import { Button, List, TextField, Grid } from "@material-ui/core";
import { useState } from "react";
const App = () => {
  const [number, setNumber] = useState([
    "AC",
    "CLEAR",
    "BG",
    "%",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
    "+",
    "-",
    "*",
    "/",
    "=",
  ]);
  const [result, setResult] = useState([]);
  const [backGround, setBackGround] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  let array = [result];
  let count = 0;
  let color = false;

  const colorMode = () => {
    color = !color;
    if (color) {
      setBackGround("#333333");
      setTextColor("#ffffff");
    } else {
      setBackGround("#ffffff");
      setTextColor("#333333");
    }
  };

  const displayNumber = (num) => {
    switch (num) {
      case "BG":
        colorMode();
        break;
      case "+":
      case "-":
      case "/":
      case "*":
      case "%":
        array.push(num);
        break;

      case "=":
        let str = result.trim();
        let total = eval(str);
        setResult(total);
        count++;
        break;

      case "CLEAR":
        if (result !== "") {
          let clearedStr = result.split("");
          let removedStr = clearedStr.pop();
          let remain = clearedStr.join("");
          setResult(remain);
          count++;
        }
        break;

      case "AC":
        count++;
        setResult("");
        break;

      default:
        let digit = parseInt(num);
        array.push(digit);
        break;
    }
    if (count === 0) {
      setResult(array.join(""));
    }
  };
  //   if (num === "=") {
  //     let str = result.trim();
  //     let total = eval(str);
  //     setResult(total);
  //     return;
  //   }
  //   if (num === "CLEAR") {
  //     setResult("");
  //     return;
  //   }
  //   if (!["+", "-", "/", "*", "="].includes(num)) {
  //     let digit = parseInt(num);
  //     array.push(digit);
  //   } else {
  //     array.push(num);
  //   }
  //   setResult(array.join(""));
  // };

  return (
    <Grid className="calc-wrapper">
      <h1 className="title">CASIO</h1>
      <TextField
          placeholder="Result will display here"
          variant="outlined"
          fontFamily="cursive"
          value={result}
          size="small"
          onChange={(e) => {
            setResult(e.target.value);
          }}
          // type="number"
        />
      <Grid container spacing={1} className="button-wrapper">
        
        {number.map((num) => (
          <Grid item className="button-design">
            <Button
              className="button-styles"
              onClick={() => {
                displayNumber(num);
              }}
              style={{
                backgroundColor: backGround,
              }}
            >
              <span
                className="button-text"
                style={{ color: textColor, fontFamily: "cursive" }}
              >
                {num}
              </span>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default App;
