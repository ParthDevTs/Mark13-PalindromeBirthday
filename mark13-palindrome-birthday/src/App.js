import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [birthdate, setBirthdate] = useState("");
  const [message, setMessage] = useState("");
  function getBirthday(event) {
    setBirthdate(event.target.value);
  }
  function addMessage() {
    let birthdateArr = birthdate.split("-");
    let second = "" + birthdateArr[0];
    let first = "" + birthdateArr[2] + birthdateArr[1];
    let isPalindrome = true;
    console.log(first, second);
    for (let i = 0, j = second.length - 1; i < first.length, j >= 0; i++, j--) {
      if (first[i] !== second[j]) {
        isPalindrome = false;
        break;
      }
    }

    if (isPalindrome === true) {
      setMessage("Is Palidrome");
    } else {
      setMessage("is not palindrome");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Palindrome Birthday</h1>
      </header>
      <div className="main">
        <div className="input__box">
          <label className="birthday__label" htmlFor="birthday">
            Enter Your Birthday
          </label>
          <input
            onChange={getBirthday}
            type="date"
            name="birthday"
            id="birthday"
          />
        </div>
        <button onClick={addMessage} className="checkDate">
          Check Birthdate
        </button>
        <div className="output__box">
          The entered birthdate ({birthdate}) {message}
        </div>
      </div>
    </div>
  );
}

export default App;
