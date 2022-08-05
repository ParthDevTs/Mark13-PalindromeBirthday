import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [birthdate, setBirthdate] = useState("");
  const [message, setMessage] = useState("");
  function getBirthday(event) {
    setBirthdate(event.target.value);
    setMessage("");
  }
  function addMessage() {
    if (birthdate === "") {
      setMessage("Please enter birthdate first");
    } else {
      let birthdateArr = birthdate.split("-");
      let second = "" + birthdateArr[0];
      let first = "" + birthdateArr[2] + birthdateArr[1];
      let isPalindrome = true;
      let secondR = "";

      for (let i = second.length - 1; i >= 0; i--) {
        secondR += second[i];
      }

      for (let i = 0; i < first.length; i++) {
        if (first[i] !== secondR[i]) {
          isPalindrome = false;
          break;
        }
      }

      let birthdate_r = "";
      for (let i = birthdate.length - 1; i >= 0; i--) {
        birthdate_r += birthdate[i];
      }

      if (isPalindrome === true) {
        setMessage("The entered birthdate " + birthdate_r + " is Palidrome");
      } else {
        setMessage(
          "The entered birthdate " + birthdate_r + " is not Palidrome"
        );
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Palindrome Birthday</h1>
        <p className="made">
          -Made with <span className="heart">❤️</span> by Parth Kathuria.
        </p>
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
        <div className="output__box">{message}</div>
      </div>
    </div>
  );
}

export default App;
