import { useState } from "react";
import "./App.css";

function App() {
const [greeting, setGreeting] = useState("");

const switchToHi = () => {
  setGreeting("Hi");
};

const switchToThai = () => {
  setGreeting("สวัสดี");
};

  return (
    <div className="App">
      <h1>Simple Greeting Message App</h1>
      <div className="greeting-container">
        <h2>{greeting}</h2>
        <div className="buttons">
          <button onClick={switchToHi}>Hi</button>
          <button onClick={switchToThai}>สวัสดี</button>
        </div>
      </div>
    </div>
  );
}

export default App;